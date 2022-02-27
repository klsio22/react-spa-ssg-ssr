import express from 'express';

const app = express();
app.set('view engine', 'ejs');

/* app.get('/api/users', (req, res) => {
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

  //return res.render('users/list', {users});
  return res.json({ data: users });
}); */

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

  if (req.header('Accept') == 'application/json') {
    return res.json({ data: users });
  }

  return res.render('users/list', { users });
});

app.listen(3335);
