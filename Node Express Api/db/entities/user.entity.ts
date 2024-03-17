import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        length: 100,
        unique: true,
    })
    cedula!: string

    @Column({
        length: 100,
    })
    fullname!: string

    @Column()
    pricePerHours!: number
}



@Entity('worker')
export class WorkerHoursEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    hoursWorked!: number;

    @ManyToOne((user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user?: UserEntity;
}