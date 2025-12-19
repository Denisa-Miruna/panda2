
import express from 'express';
const app = express();
app.use(express.json());
let leaderboard = [];
app.get('/leaderboard', (req,res)=>res.json(leaderboard));
app.post('/score',(req,res)=>{
  leaderboard.push(req.body);
  leaderboard.sort((a,b)=>b.score-a.score);
  res.sendStatus(200);
});
app.listen(3001,()=>console.log('Backend on 3001'));
