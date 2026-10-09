import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return { message: 'Hello from NestJS + MongoDB 👋' };
  }

  // Useful for Render health checks and Docker HEALTHCHECK
  @Get('health')
  health() {
    return { status: 'ok', uptime: process.uptime() };
  }
}
