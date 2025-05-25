import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Load .env first
    ConfigModule.forRoot({
      isGlobal: true, // Makes config available globally
    }),
    // Use ConfigService to get MongoDB URI
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_DATABASE_URI') || 'mongodb://localhost:27017/mydatabase';
        console.log(`Connecting to MongoDB at ${uri}`);
        return { uri };
      },
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

