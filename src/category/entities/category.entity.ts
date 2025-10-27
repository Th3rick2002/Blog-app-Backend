import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  title: string;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
