import { connectDB } from "../utils/sql.js";

// Get all users
export const getUsers = async (req, res) => {
    try {
        const sql = connectDB();
        const data = await sql.query("SELECT * FROM users");
        res.json(data.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ msg: "Error fetching users" });
    }
};

// Get a specific user by ID
export const getUser = async (req, res) => {
    try {
        if (!req.params.user_id || isNaN(req.params.user_id)) {
            return res.status(400).json({ msg: "Invalid user ID format" });
        }

        const userId = parseInt(req.params.user_id, 10);
        const sql = connectDB();
        const query = { text: "SELECT * FROM users WHERE user_id = $1", values: [userId] };

        const data = await sql.query(query);

        if (data.rows.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.json(data.rows[0]);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ msg: "Error fetching user" });
    }
};

// Create a new user
export const postUser = async (req, res) => {
    const { username, first_name, last_name, birthdate, password, email, points } = req.body;
    
    try {
        const sql = connectDB();
        const query = {
            text: "INSERT INTO users(username, first_name, last_name, birthdate, password, email, points) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            values: [username, first_name, last_name, birthdate, password, email, points || 0], // Default points to 0 if not provided
        };

        await sql.query(query);
        res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ msg: "Error creating user" });
    }
};

// Update an existing user
export const putUser = async (req, res) => {
    const { username, first_name, last_name, birthdate, password, email, points } = req.body;

    try {
        const userId = parseInt(req.params.user_id, 10);

        // ❌ Reject invalid IDs (0 or negative numbers)
        if (isNaN(userId) || userId <= 0) {
            return res.status(400).json({ msg: "Invalid user ID format" });
        }

        // Ensure birthdate is either a valid value or NULL
        const formattedBirthdate = birthdate && birthdate.trim() !== "" ? birthdate : null;

        const sql = connectDB();
        const query = {
            text: `UPDATE users 
                   SET username = $1, 
                       first_name = $2, 
                       last_name = $3, 
                       birthdate = COALESCE($4::DATE, birthdate), 
                       password = $5, 
                       email = $6, 
                       points = $7 
                   WHERE user_id = $8`,
            values: [username, first_name, last_name, formattedBirthdate, password, email, points, userId],
        };

        const result = await sql.query(query);

        if (result.rowCount === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Error updating user" });
    }
};


// Delete a user
export const deleteUser = async (req, res) => {
    try {
        if (!req.params.user_id || isNaN(req.params.user_id)) {
            return res.status(400).json({ msg: "Invalid user ID format" });
        }

        const userId = parseInt(req.params.user_id, 10);
        const sql = connectDB();
        const query = { text: "DELETE FROM users WHERE user_id = $1", values: [userId] };

        const result = await sql.query(query);

        if (result.rowCount === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ msg: "Error deleting user" });
    }
};
