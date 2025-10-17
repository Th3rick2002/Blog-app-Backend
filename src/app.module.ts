import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [CategoryModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
