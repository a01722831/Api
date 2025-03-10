import { connectDB } from "../utils/sql.js";

export const getUsers = async (req, res) => {
    const sql=connectDB();
    const data = await sql.query("select * from users");
    console.log(data.rows);
    data.json(data.rows);
};

export const getUser = async (req, res) => {
    const sql=connectDB();
    const query = {text : "select * from users where id = $1", values: [req.params.id]};
    const data = await sql.query();
    console.log(data.rows);
    data.json(data.rows);
};

export const postUser = async (req, res) => {
    const {name, username, password} = req.body;
    const sql=connectDB();
    const query = {text : "insert into users(name, username, password) values ($1, $2, $3)", values: []};
    const data = await sql.query();
    res.json(data.rows); 
};

export const putUser = async (req, res) => {
    const {name, username, password} = req.body;
    const sql=connectDB();
    const query = {text : "update users set name = $1, username = $2, password = $3 where id = 4$", values: []};
    const data = await sql.query();
    res.json(data.rows); 
};

export const deleteUser = async (req, res) => {
    try{
        const sql=connectDB();
        const query = {text : "delete from users where id = $1", values: [req.params.id],};
        await sql.query(query);
        res.status(200).json({msg: "ya se borro"});
    }catch (error){
        res.status(500).json({msg: "no se borro"});
    }
};