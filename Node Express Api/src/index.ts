import express, { Request, Response } from 'express';
import { employeeDB, workerDB } from '../db/db-connection';
import { UserEntity, WorkerHoursEntity } from '../db/entities/user.entity';
  

const app = express();

app.use(express.json());

app.use('/', express.static('public'));

app.get('/queries', (request: Request, response: Response) => {

    const { limit, languaje } = request.query;
    let sqlSquery = 'Select * FROM Users';

    if (limit) {
        sqlSquery += ` Limit=${limit}`;
    }

    if (languaje) {
        sqlSquery += ` Languaje = ${languaje}`
    }


    response.json(request.query);
});

app.get('/employee', async (request: Request, response: Response) => {
    const users = await employeeDB.getRepository(UserEntity).find();
    response.json(users);
});

app.get('/employee/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    const user = await employeeDB.getRepository(UserEntity).findOneBy({ id });
   

    if (!user) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with id: ${id} was not found`
        })
    }

    response.json({
        statusCode: 200,
        statusValue: 'OK',
        data: user
    });
});

app.get('/employee/:id/hours', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    const user = await workerDB.getRepository(WorkerHoursEntity).findOneBy({ id });

    if (!user) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with id: ${id} was not found`
        })
    }

    response.json({
        statusCode: 200,
        statusValue: 'OK',
        data: user
    });
});

app.get('/employee/:id/salary', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);

    const user = await employeeDB.getRepository(UserEntity).findOneBy({ id });
    const userWorker = await employeeDB.getRepository(WorkerHoursEntity).findOneBy({ id });

    const total = user?.pricePerHours! * userWorker?.hoursWorked!

    if (!user) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with id: ${id} was not found`
        })
    }

    response.json({
        statusCode: 200,
        statusValue: 'OK',
        data: total
    });
});


app.post('/employee', async (request: Request, response: Response) => {
    const { cedula, fullname, pricePerHours } = request.body;

    try {
        const currentUser = await employeeDB.getRepository(UserEntity).findOneBy({ cedula });

        if (currentUser) {
            return response.status(400).json({
                statusCode: 400,
                statusValue: 'Bad Request',
                message: `Username with cedula: ${cedula} already exists`
            });
        }

        const newUser = {
            cedula,
            fullname,
            pricePerHours
        }

        const userRepository = employeeDB.getRepository(UserEntity);
        const newRecord = userRepository.create(newUser);
        const result = await userRepository.save(newRecord);

        response.status(201).json(result);
    } catch (error) {
        console.error("Error creating employee:", error);
        response.status(500).json({ message: "Internal Server Error" });
    }
});


app.post('/employee/:id/hours', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)
    const { hoursWorked } = request.body;

    if (hoursWorked.trim().length === 0) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `cedula is required`
        })
    }
   
    const currentUser = await employeeDB.getRepository(UserEntity).findOneBy({ id });

    if (currentUser) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `username con el id: ${id} in already in use`
        })
    }

    const newUser:any = {
        hoursWorked: parseInt(hoursWorked),
        user: currentUser
    }

    const userRepository = employeeDB.getRepository(WorkerHoursEntity);
    const newRegistro = userRepository.create(newUser);
    const result = await userRepository.save(newRegistro);

    response.status(201).json(result);
});

app.put('/employee/:id', async (request: Request, response: Response) => {
    const id = request.params.id;
    const { cedula, fullname, pricePerHours } = request.body;

    if (isNaN(Number.parseInt(id))) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `id: ${id} is Not a Number`
        })
    }

    if (cedula.trim().length === 0) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `cedula is required`
        })
    }

    if (fullname.trim().length == 0) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `fullname is required`
        })
    }

    const userId = Number.parseInt(id);
    const userRepository = employeeDB.getRepository(UserEntity);
    const existsUser = await userRepository.findOneBy({ id: userId });

    if (!existsUser) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with id ${id} was not found`
        })
    }

    const currentUser = await employeeDB.getRepository(UserEntity).findOneBy({ cedula });

    if (currentUser?.id !== Number.parseInt(id) && currentUser?.cedula=== cedula) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `username: ${cedula} in already in use`
        })
    }

    existsUser.cedula = cedula;
    existsUser.fullname = fullname;
    existsUser.fullname = pricePerHours;

    await userRepository.save(existsUser);

    response.json(existsUser);
});

app.delete('/employee/:id', async (request: Request, response: Response) => {
    const id = request.params.id;

    if (isNaN(Number.parseInt(id))) {
        return response.status(400).json({
            statusCode: 400,
            statusValue: 'Bad Request',
            message: `id: ${id} is Not a Number`
        })
    }

    const userId = Number.parseInt(id);
    const userRepository = employeeDB.getRepository(UserEntity);
    const existsUser = await userRepository.findOneBy({ id: userId });

    if (!existsUser) {
        return response.status(404).json({
            statusCode: 404,
            statusValue: 'Not Found',
            message: `The user with id ${id} was not found`
        })
    }

    await userRepository.remove(existsUser);
    
    response.json({
        statusCode: 200,
        statusValue: 'OK',
        message: `The user with id: ${id} was delete.`
    })
});

app.listen(3030, () => console.log('Server running at port 3030'));