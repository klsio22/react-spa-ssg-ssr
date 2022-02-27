import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  //buscava dado no banco

  const users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Mayke',
    },
    {
      id: 3,
      name: 'Ana',
    },
  ];

  return res.render('users/list');
});

app.listen(3333);
