const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');



const app = express();


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crudnextjs',
    password: '948094',
    port: 5432,
});



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post('/api/tabela',async function inserir(req,res){
  try{
    const client = await pool.connect();
    
    const {nome,email,senha} = req.body
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
    const values = [nome,email,senha];
   

    console.log('Dados recebidos:', nome, email, senha);

    await client.query(query,values);
    

    console.log("dados inseridos com sucesso")
    res.status(201).json({ message: 'Dados inseridos com sucesso' });

  } catch (error) {
    console.error('Erro ao inserir os dados:', error);
    res.status(500).json({ error: 'Erro ao inserir os dados' });
  } finally{
    pool.end();
  }
 

});


app.listen(5000, () => {
  console.log('API rodando na porta 5000');
});



  

