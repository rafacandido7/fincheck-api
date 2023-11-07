import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service'
import { Injectable } from '@nestjs/common'

import { CreateBankAccountDto } from '../dto/create-bank-account.dto'
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto'

import { BankAccountsRepository } from '@/shared/database/repositories/bank-accounts.repositories'

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
    private readonly ValidateService: ValidateBankAccountOwnershipService,
  ) {}

  async create(createBankAccountDto: CreateBankAccountDto, userId: string) {
    const { color, initialBalance, name, type } = createBankAccountDto

    const bankAccount = await this.bankAccountsRepository.create({
      data: {
        color,
        initialBalance,
        name,
        type,
        userId,
      },
    })

    if (!bankAccount) {
      throw new Error('Create bank account error....')
    }

    return bankAccount
  }

  async findAllByUserId(userId: string) {
    const users = await this.bankAccountsRepository.findMany({
      where: { userId },
    })

    return users
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const { color, initialBalance, name, type } = updateBankAccountDto

    await this.ValidateService.validate(userId, bankAccountId)

    return await this.bankAccountsRepository.update({
      where: { id: bankAccountId, userId },
      data: { color, initialBalance, name, type },
    })
  }

  async remove(userId: string, bankAccountId: string) {
    await this.ValidateService.validate(userId, bankAccountId)

    await this.bankAccountsRepository.delete({
      where: { id: bankAccountId, userId },
    })
  }
}
