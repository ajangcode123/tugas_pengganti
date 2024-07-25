import mariadb from "mariadb";
import dotebv from "dotenv";

dotebv.config();

const {HOST, PORT, USER, PASSWORD, DATABASE} = process.env;
export const connection = await mariadb.createConnection({
    host:HOST,
    port:PORT,
    user:USER,
    password:PASSWORD,
    database:DATABASE
})