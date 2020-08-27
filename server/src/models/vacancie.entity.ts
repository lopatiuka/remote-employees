import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
class Vacancie{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public description: string;    
    
    @Column()
    public category: string;

    @Column()
    public imagePath: string;
}

export default Vacancie;