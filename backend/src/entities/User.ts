import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Task } from "./Task";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at!: Date;

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[];
} 