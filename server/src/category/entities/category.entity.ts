import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToMany
} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Transaction} from "../../transaction/entities/transaction.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({name: 'category_id'})
    id: number

    @Column()
    title: string

    @ManyToOne(()=>User, (user)=>user.categories)
    @JoinColumn({name: 'user_id'})
    user: User

    //One category to many transactions
    @OneToMany(()=>Transaction, (transaction)=>transaction.category)
    transactions: Array<Transaction>

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
