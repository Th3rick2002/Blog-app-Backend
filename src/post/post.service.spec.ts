import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PostService', () => {
  let service: PostService;
  let repo: Repository<Post>;

  const mockRepo = {
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    repo = module.get<Repository<Post>>(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
