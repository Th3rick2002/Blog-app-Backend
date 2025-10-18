import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id_post: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 1000 })
  content: string;

  @Column({ type: 'varchar' })
  image_url: string;

  @Column({ type: 'varchar', length: 25 })
  autor: string;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
