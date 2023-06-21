import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class User {
  //Auto generated
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
  //
  @OneToMany(
    () => Category,
    (category) => category.user,
    //if user was deleted the categories will be deleted as well
    { onDelete: 'CASCADE' },
  )
  categories: Array<Category>;

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    onDelete: 'CASCADE',
  })
  transactions: Array<Transaction>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
