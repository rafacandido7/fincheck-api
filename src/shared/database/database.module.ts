import { Global, Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

import { UsersRepository } from './repositories/user.repositories'
import { CategoriesRepository } from './repositories/categories.repositories.ts'

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
