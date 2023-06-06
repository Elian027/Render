const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 4")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Erick",
            "apellido":"Santillan",
            "edad":21
        },
        {
            "nombre":"Pablo",
            "apellido":"Uchuari",
            "edad":24
        },
        {
            "nombre":"Erick",
            "apellido":"Palomo"
        },
        {
            "nombre":"DIlan",
            "apellido":"Flores"
        },
        {
            "nombre":"Mateo",
            "apellido":"Congo",
            "edad":22
        },
        {
            "nombre":"Elian",
            "apellido":"Moreira",
            "edad":20
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});