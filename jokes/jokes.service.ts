import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke } from './schemas/joke.schema';

@Injectable()
export class JokesService {
  constructor(@InjectModel('Joke') private jokeModel: Model<Joke>) {}

  async submitJoke(joke: Joke): Promise<Joke> {
    const newJoke = new this.jokeModel(joke);
    return newJoke.save();
  }

  async getJokeTypes(): Promise<string[]> {
    return this.jokeModel.distinct('type').exec();
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
