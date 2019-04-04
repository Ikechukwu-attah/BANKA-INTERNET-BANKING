
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('welcome onboard');
});

app.use(express.json());

app.listen(3000, () => {
  console.log('server runinig');
});
// eslint-disable-next-line semi-style
