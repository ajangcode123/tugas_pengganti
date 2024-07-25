import express from "express";
import { connection } from "./db.js";
const app = express();
app.use(express.json());

app.post("/mahasiswa", async (req, res) => {
    await connection.execute(
        "INSERT INTO mahasiswa (id, nama, nim) VALUES (?, ?, ?)",
        [req.body.id, req.body.nama, req.body.nim]
    )

    res.send("mahasiswa berhasil ditambah");
})

.put("/mahasiswa/:id", async (req, res) => {
    await connection.execute(
        "UPDATE mahasiswa SET nama = ?, nim = ? WHERE id = ?",
        [req.body.nama, req.body.nim, req.params.id]
    );

    res.send("mahasiswa berhasil diubah");
})

app.get("/mahasiswa", async (req, res) => {
    const result = await connection.query("SELECT * FROM mahasiswa");
    res.json(result);
})

app.delete("/mahasiswa/:id", async (req, res) => {
    await connection.execute(
        "DELETE FROM mahasiswa WHERE id = ?",[req.params.id]
    )
    res.send("mahasiswa berhasil dihapus");
})

app.listen(3000, ()=> console.log("server berjalan"));