import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterConsumptionModule } from './water-consumption/water-consumption.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kyaa',
      database: 'water_consumption_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    WaterConsumptionModule,
  ],
})
export class AppModule {}
