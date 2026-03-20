import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  getRoot() {
    return {
      message: 'Server is live',
    };
  }
}