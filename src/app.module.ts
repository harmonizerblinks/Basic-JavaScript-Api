import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { IntegrationModule } from './integration/integration.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [AuthModule, IntegrationModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
