import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
// port: 5432
// user: postgres
// Installation Directory: /Library/PostgreSQL/15
// Server Installation Directory: /Library/PostgreSQL/15
// Data Directory: /Library/PostgreSQL/15/data
// Database Port: 5432
// Database Superuser: postgres
// Operating System Account: postgres
// Database Service: postgresql-15
// Command Line Tools Installation Directory: /Library/PostgreSQL/15
// pgAdmin4 Installation Directory: /Library/PostgreSQL/15/pgAdmin 4
// Stack Builder Installation Directory: /Library/PostgreSQL/15
// Installation Log: /tmp/install-postgresql.log
