import { Injectable, NotFoundException } from '@nestjs/common'

import { UsersRepository } from '@/shared/database/repositories/user.repositories'

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string) {
    const user = await this.usersRepository.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }
}
