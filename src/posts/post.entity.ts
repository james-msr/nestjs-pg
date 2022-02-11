import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Transform } from 'class-transformer';
import User from '../users/user.entity';
import Category from '../categories/category.entity';
 
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column()
    public title: string;
    
    @Column()
    public content: string;

    @Column({ nullable: true })
    @Transform(value => {
        if (value !== null) {
            return value;
        }
    })
    public category?: string;

    @ManyToOne(() => User, (author:User) => author.posts)
    public author: User;

    @ManyToMany(() => Category)
    @JoinTable()
    public categories: Category[];
}
