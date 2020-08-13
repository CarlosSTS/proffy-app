import express from 'express';

const app = express();

app.get('/users',(req,res)=>{
    res.send({message : 'olá'})
    console.log('listagem de usuários');
});

app.listen(3333)