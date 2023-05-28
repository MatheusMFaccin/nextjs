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

app.post('/api/inserir',async function inserir(req,res){
  try{
    const client = await pool.connect();
    
    const {nome,email,senha} = req.body
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
    const values = [nome,email,senha];
   

    console.log('Dados recebidos:', nome, email, senha);

    await client.query(query,values);
    client.release()
    console.log("dados inseridos com sucesso")
    res.status(201).json({ message: 'Dados inseridos com sucesso' });

  } catch (error) {
    console.error('Erro ao inserir os dados:', error);
    res.status(500).json({ error: 'Erro ao inserir os dados' });
  }
  
 

});

app.post('/api/login',async function logar(req,res){
  try{
    const client = await pool.connect();
    const {nome,senha} = req.body
    const query = 'SELECT * FROM usuarios WHERE nome = $1 and senha = $2 ';
    const values = [nome,senha]
    const result = await client.query(query, values);
    client.release()
    if (result.rows.length === 0){
      return res.status(401).json({ message: 'Usuário ou Senha incorretos' })
    }else{
      return res.status(200).json({ message: 'Login bem-sucedido' });
    }

   

  } catch (error) {
      console.error('Erro ao verificar as credenciais:', error);
      return res.status(500).json({ message: 'Erro ao verificar as credenciais' });
  } 


});



app.listen(5000, () => {
  console.log('API rodando na porta 5000');
});



  

