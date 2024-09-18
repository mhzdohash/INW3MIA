import express from 'express';
import conectaNaDb from './db.js'; 
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) =>{
  console.error('Erro ao conectar ao MongoDb', erro)  
})

conexao.once('open', () =>{
console.log('Conectado ao MongoDb')
})

app.listen(3000, () =>{
    console.log('Servidor conectado')
})