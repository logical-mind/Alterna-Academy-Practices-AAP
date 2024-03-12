"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const users = [
    { id: 1, username: 'aperez', fullname: 'Alex Perez' },
    { id: 2, username: 'apaco', fullname: 'Alex Paco' },
    { id: 3, username: 'apena', fullname: 'Alex Pena' },
    { id: 4, username: 'apenaz', fullname: 'Alex Penaz' },
    { id: 5, username: 'apocho', fullname: 'Alex Pocho' },
    { id: 6, username: 'apacheco', fullname: 'Alex Pacheco' },
];
app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p>soy pablo</p>');
});
app.get('/users/:username', (request, response) => {
    const username = request.params.username;
    const user = users.find((u) => u.username === username);
    if (!user) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with username ${username} was not found`
        });
    }
    response.json({
        statusCode: 200,
        statusValue: 'OK',
        data: user
    });
});
app.get('/api', (req, res) => {
    res.json(users);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
