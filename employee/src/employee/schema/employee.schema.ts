import mongoose from 'mongoose';
import { EmployeeInterface } from '../interface/employee.interface';

export const EmployeeSchema = new mongoose.Schema<EmployeeInterface>({
  id: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
  },
});
