import { Request, Response } from 'express';
import path from 'path';

export function indexWelcome(req: Request, res: Response): void {
   res.sendFile(path.join(__dirname, '../public/index.html'));
}
