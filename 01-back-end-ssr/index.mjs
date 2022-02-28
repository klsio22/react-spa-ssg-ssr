import express from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

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
      name: 'Paula',
    },
  ];

  /* if (req.header('Accept') == 'application/json') {
    return res.json({ data: users });
  }  */

  return res.json({ data: users });
});

app.listen(3334);
