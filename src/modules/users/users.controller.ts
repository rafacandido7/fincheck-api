import { Controller, Get } from '@nestjs/common'

import { UsersService } from './users.service'

import { ActiveUserId } from '@/shared/decorators/ActiveUserId'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return await this.usersService.getUserById(userId)
  }
}
