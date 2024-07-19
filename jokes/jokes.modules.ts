import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeSchema } from './schemas/joke.schema';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }])],
  controllers: [JokesController],
  providers: [JokesService],
  exports: [JokesService],
})
export class JokesModule {}
