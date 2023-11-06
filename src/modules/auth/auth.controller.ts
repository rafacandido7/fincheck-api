import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from './auth.service'

import { isPublic } from '@/shared/decorators/IsPublic'
import { SignInDto, SignUpDto } from './dto/sign.dto'

@isPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }

  @Post('signUp')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }
}
