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

  /**
   * Submit a new joke.
   * @param joke Joke data to submit.
   */
  @Post('submit')
  async submitJoke(@Body() joke: Joke) {
    return this.jokesService.submitJoke(joke);
  }

  /**
   * Add a new joke type.
   * @param type Type data to add.
   */
  @Post('add-type')
  async addType(@Body() type: Type) {
    return this.jokesService.addType(type);
  }

  /**
   * Get all joke types.
   * @returns A list of joke types.
   */
  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  /**
   * Get all jokes.
   * @returns A list of all jokes.
   */
  @Get()
  async getAllJokes() {
    return this.jokesService.getAllJokes();
  }

  /**
   * Get a joke by its ID.
   * @param id ID of the joke.
   * @returns The joke with the specified ID.
   */
  @Get(':id')
  async getJokeById(@Param('id') id: string) {
    return this.jokesService.getJokeById(id);
  }

  /**
   * Update a joke by its ID.
   * @param id ID of the joke to update.
   * @param joke Updated joke data.
   * @returns The updated joke.
   */
  @Put(':id')
  async updateJoke(@Param('id') id: string, @Body() joke: Partial<Joke>) {
    return this.jokesService.updateJoke(id, joke);
  }

  /**
   * Delete a joke by its ID.
   * @param id ID of the joke to delete.
   * @returns Confirmation of deletion.
   */
  @Delete(':id')
  async deleteJoke(@Param('id') id: string) {
    return this.jokesService.deleteJoke(id);
  }
}
