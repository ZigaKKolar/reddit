import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../user/user.entity";
import {SubEntity} from "../sub/sub.entity";

@Entity('articles')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    @ManyToOne(() => User, (user:User) => user.articles)
    @JoinColumn({name:'user_id'})
    user: User;

    @ManyToOne(()=> SubEntity, (subEntity: SubEntity) => subEntity.articles)
    @JoinColumn({name:'sub_id'})
    sub:ArticleEntity;
}