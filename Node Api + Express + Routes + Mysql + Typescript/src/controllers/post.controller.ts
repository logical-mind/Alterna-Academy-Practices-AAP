import { Request, Response } from 'express'
import { connect } from '../database'
import { Empleados, HorasTrabajadas } from '../interface/Post'



export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try{
        let newEmpleado
        const conn = await connect();
        const empleado: any = await conn.query('SELECT * FROM empleado');
        const horas: any = await conn.query('SELECT * FROM horasTrabajadas');


        empleado[0].forEach((element: { id: number; horasTrabajadas:number }) => {
       
            const horasFiltradas = horas[0].filter((hora: any) => hora.empleadoId === element.id);
            
            if (horasFiltradas) {
                const totalHorasTrabajadas = horasFiltradas.reduce((total: number, hora: any) => total + hora.horasTrabajadas, 0);
                element.horasTrabajadas = totalHorasTrabajadas;
            }else{
                element.horasTrabajadas = 0; 
            }  
                
        });
        return res.json(empleado[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPost(req: Request, res: Response) {
    const newEmpleado: Empleados = req.body
    console.log(newEmpleado)
    const conn = await connect();
    await conn.query('INSERT INTO empleado (cedula, fullname, pagoPorHora) VALUES (?, ?, ?)', [newEmpleado.cedula, newEmpleado.fullname, newEmpleado.pagoPorHora]);
    res.json({
        message: 'New Post Created'
    });
}

export async function addHoras(req: Request, res: Response) {
    const newHora: HorasTrabajadas = req.body
    console.log(newHora)
    const conn = await connect();
    await conn.query('INSERT INTO horasTrabajadas (horasTrabajadas,empleadoId) VALUES (?, ?)', [newHora.horasTrabajadas,newHora.empleadoId]);
    res.json({
        message: 'New hour Added'
    });
}

export async function getPost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM empleado WHERE id = ?', [id]);
    res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM empleado WHERE id = ?', [id]);
    res.json({
        message: 'Post deleted'
    });
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Empleados = req.body;
    const conn = await connect();
    await conn.query('UPDATE empleado set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Post Updated'
    });
}