import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeSchema } from './schemas/joke.schema';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { TypeSchema } from './schemas/type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Joke', schema: JokeSchema },
      { name: 'Type', schema: TypeSchema },
    ]),
  ],
  controllers: [JokesController],
  providers: [JokesService],
  exports: [JokesService],
})
export class JokesModule {}
