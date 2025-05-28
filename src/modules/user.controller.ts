import { Controller, Get, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Redirect('https://t.me/the_xchoo', 301)
  async getAll() {
    return await this.userService.getAll();
  }
}
