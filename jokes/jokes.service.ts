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

  async submitJoke(joke: Joke): Promise<Joke> {
    const newJoke = new this.jokeModel(joke);
    return newJoke.save();
  }

  async addType(type: Type): Promise<Type> {
    const newType = new this.typeModel(type);
    return newType.save();
  }

  async getJokeTypes(): Promise<Type[]> {
    return this.typeModel.find().exec();
  }

  async getAllJokes(): Promise<Joke[]> {
    return this.jokeModel.find().exec();
  }

  async getJokeById(id: string): Promise<Joke | null> {
    return this.jokeModel.findById(id).exec();
  }

  async updateJoke(id: string, joke: Partial<Joke>): Promise<Joke | null> {
    return this.jokeModel.findByIdAndUpdate(id, joke, { new: true }).exec();
  }

  async deleteJoke(id: string): Promise<Joke | null> {
    return this.jokeModel.findByIdAndDelete(id).exec();
  }
}
