import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entity/employee.entity';
import { EmployeeInterface } from './interface/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('employee')
    private readonly employeeModel: Model<EmployeeInterface>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find();
  }
  async findOne(id: string) {
    return this.employeeModel.findOne({ id });
  }

  async create(employee: EmployeeCreateDTO) {
    const emp = this.employeeModel.create(employee);
    return emp;
  }

  async forProject(id: string) {
    return await this.employeeModel.find({ projectId: id });
  }
  // async forLocation(id: string) {
  //   return await this.employeeRepository.find({ locationId: id });
  // }
}
