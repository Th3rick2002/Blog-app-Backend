import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('CategoryService', () => {
  let service: CategoryService;
  let repo: Repository<Category>;

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
        CategoryService,
        { provide: getRepositoryToken(Category), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    repo = module.get<Repository<Category>>(getRepositoryToken(Category));
  });

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create category', async () => {
    const dto = { title: 'test category' };
    const saved = { id_category: 1, title: 'test category' };

    mockRepo.save.mockResolvedValue(saved);

    const result = await service.create(dto);

    expect(repo.save).toHaveBeenCalledWith(dto);
    expect(result).toEqual(saved);
  });

  it('should get all category', async () => {
    const saved = [
      { id_category: 1, title: 'test category' },
      { id_category: 2, title: 'test category 2' }
    ];

    mockRepo.find.mockResolvedValue(saved);

    const result = await service.findAll();
    expect(repo.find).toHaveBeenCalled()
    expect(result).toEqual(saved)
  });

  it('should get category by id', async () => {
    const saved =  { id_category: 1, title: 'test category' };

    mockRepo.findOneBy.mockResolvedValue(saved);

    const result = await service.findOne(1);

    expect(repo.findOneBy).toHaveBeenCalledWith({ id_category: 1 })
    expect(result).toEqual(saved)
  });

  it('should delete category by id', async () => {
    mockRepo.delete.mockResolvedValue({ affected: 1 })

    const result = await service.remove(1)

    expect(repo.delete).toHaveBeenCalledWith(1)
    expect(result).toEqual({ affected: 1 })
  });
});
