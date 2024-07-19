import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesModule } from 'jokes/jokes.modules';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://praveenk:Z4uq2BwMcoJWDZ3k@jokesapp.khokyn1.mongodb.net/?retryWrites=true&w=majority&appName=JokesApp',
    ),
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
