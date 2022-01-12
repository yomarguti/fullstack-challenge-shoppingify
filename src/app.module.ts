import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database-module/database.module';

@Module({
  imports: [DatabaseModule, ItemsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
    ConfigModule.forRoot({
      envFilePath: [`.env.dev`],
      validationSchema: configValidationSchema,
    }),
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';
        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DATABASE_HOST'),
          port: configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USER'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
        };
      },
    }), */
