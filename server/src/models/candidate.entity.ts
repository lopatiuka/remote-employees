import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
class Candidate{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public fullName: string;

    @Column()
    public telephone: string;    
    
    @Column()
    public email: string;

    @Column()
    public vacancie: string;

    @Column()
    public cvLink: string;

    @Column()
    public testTaskLink: string;

    @Column()
    public howKnow: string;

    @Column()
    public message: string;
}

export default Candidate;