import 'dotenv/config'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

import { env } from './shared/config/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(env.apiPort)
}

bootstrap()

console.log(
  '\x1b[34m\x1b[1m%s\x1b[0m',
  `API Running on http://localhost:${env.apiPort} 🚀\n`,
)
