import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
class Admin{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public login: string;

    @Column()
    public password: string;    
}

export default Admin;