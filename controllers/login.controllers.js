import { connectDB } from "../utils/sql.js";

export const getUser = async (req, res) => {
    const sql=connectDB();
    const query = {text : "select * from users where username = $1", values: [req.body.username]};
    const data = await sql.query();
    if(!data.rows.length<1){
        res.json({isLogin: false, user: {} });
        return;
    }
    if(req.body.password === data.rows[0].password){
        res.json({isLogin: true, user: data.rows});
        return;
    } else{
        req.json({isLogin: false, user: {} });
    }
};