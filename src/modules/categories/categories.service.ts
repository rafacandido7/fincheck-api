import { Injectable } from '@nestjs/common'

import { CategoriesRepository } from '@/shared/database/repositories/categories.repositories.ts'

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async findAllByUserId(userId: string) {
    return this.categoriesRepository.findMany({
      where: { userId },
    })
  }
}
