import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';
import { EmployeeSchema } from './schema/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'employee',
        schema: EmployeeSchema,
        collection: 'employees',
      },
    ]),
  ],
  providers: [EmployeeResolver, EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
