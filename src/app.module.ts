import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.20.0.2',
      port: 5432,
      username: 'user1234',
      password: 'pass1234',
      database: 'blog_db',
      entities: [Category],
      synchronize: true,
      retryDelay: 3000,
      autoLoadEntities: true,
    }),
    CategoryModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
