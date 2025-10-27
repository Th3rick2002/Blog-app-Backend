import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: 'varchar', nullable: true })
  image_url?: string;

  @Column({ type: 'varchar', length: 25 })
  author: string;

  @Column({ type: 'int', default: 0 })
  reactions_count: number;

  @ManyToOne(() => Category, (category) => category.posts)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
