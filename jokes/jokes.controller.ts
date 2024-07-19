import {
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { Joke } from './schemas/joke.schema';
import { Type } from './schemas/type.schema';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post('submit')
  async submitJoke(@Body() joke: Joke) {
    return this.jokesService.submitJoke(joke);
  }

  @Post('add-type')
  async addType(@Body() type: Type) {
    return this.jokesService.addType(type);
  }

  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  @Get()
  async getAllJokes() {
    return this.jokesService.getAllJokes();
  }

  @Get(':id')
  async getJokeById(@Param('id') id: string) {
    return this.jokesService.getJokeById(id);
  }

  @Put(':id')
  async updateJoke(@Param('id') id: string, @Body() joke: Partial<Joke>) {
    return this.jokesService.updateJoke(id, joke);
  }

  @Delete(':id')
  async deleteJoke(@Param('id') id: string) {
    return this.jokesService.deleteJoke(id);
  }
}
