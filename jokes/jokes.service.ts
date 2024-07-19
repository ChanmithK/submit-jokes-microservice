import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './schemas/joke.schema';
import { Type } from './schemas/type.schema';

@Injectable()
export class JokesService {
  constructor(
    @InjectModel('Joke') private jokeModel: Model<Joke>,
    @InjectModel('Type') private typeModel: Model<Type>,
  ) {}

  /**
   * Submit a new joke to the database.
   * @param joke The joke data to save.
   * @returns The saved joke.
   */
  async submitJoke(joke: Joke): Promise<Joke> {
    const newJoke = new this.jokeModel(joke);
    return newJoke.save();
  }

  /**
   * Add a new type to the database.
   * @param type The type data to save.
   * @returns The saved type.
   */
  async addType(type: Type): Promise<Type> {
    const newType = new this.typeModel(type);
    return newType.save();
  }

  /**
   * Get all joke types from the database.
   * @returns A list of all joke types.
   */
  async getJokeTypes(): Promise<Type[]> {
    return this.typeModel.find().exec();
  }

  /**
   * Get all jokes from the database.
   * @returns A list of all jokes.
   */
  async getAllJokes(): Promise<Joke[]> {
    return this.jokeModel.find().exec();
  }

  /**
   * Get a specific joke by its ID.
   * @param id The ID of the joke to retrieve.
   * @returns The joke with the specified ID or null if not found.
   */
  async getJokeById(id: string): Promise<Joke | null> {
    return this.jokeModel.findById(id).exec();
  }

  /**
   * Update a joke by its ID.
   * @param id The ID of the joke to update.
   * @param joke The updated joke data.
   * @returns The updated joke or null if not found.
   */
  async updateJoke(id: string, joke: Partial<Joke>): Promise<Joke | null> {
    return this.jokeModel.findByIdAndUpdate(id, joke, { new: true }).exec();
  }

  /**
   * Delete a joke by its ID.
   * @param id The ID of the joke to delete.
   * @returns The deleted joke or null if not found.
   */
  async deleteJoke(id: string): Promise<Joke | null> {
    return this.jokeModel.findByIdAndDelete(id).exec();
  }
}
