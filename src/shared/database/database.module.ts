import { Global, Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

import { BankAccountsRepository } from './repositories/bank-accounts.repositories'
import { CategoriesRepository } from './repositories/categories.repositories.ts'
import { UsersRepository } from './repositories/user.repositories'

@Global()
@Module({
  providers: [
    PrismaService,
    CategoriesRepository,
    UsersRepository,
    BankAccountsRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
