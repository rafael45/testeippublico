const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 App Node.js está rodando com IP público!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
