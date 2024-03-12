import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

type User ={
    id:number,
    username: string,
    fullname: string
}

const users = [
    {id: 1, username: 'aperez', fullname: 'Alex Perez'},
    {id: 2, username: 'pedromarmol', fullname: 'Alex Paco'},
    {id: 3, username: 'apena', fullname: 'Alex Pena'},
    {id: 4, username: 'apenaz', fullname: 'Alex Penaz'},
    {id: 5, username: 'apocho', fullname: 'Alex Pocho'},
    {id: 6, username: 'apacheco', fullname: 'Alex Pacheco'},
]

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p>soy pablo</p>');
})


app.get('/users/:username', (request: Request, response: Response) => {
    const username = request.params.username;
    const user = users.find((u:User) => u.username === username);

    if(!user){
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message:`The user with username ${username} was not found`
        }) 
    }

    response.json({
        statusCode: 200,
        statusValue: 'OK',
        data: user
    });
});

app.get('/api', (req: Request, res: Response) => {
  res.json(users);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});