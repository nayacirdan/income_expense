import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  id: number;

  @Column()
  title: string;

  //Can be null, if category deleted - transaction type will be null, but saved
  @Column({ nullable: true })
  type: string;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
