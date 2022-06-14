import mongoose from 'mongoose';
import { ProjectInterface } from '../interface/project.interface';

export const ProjectSchema = new mongoose.Schema<ProjectInterface>({
  id: {
    type: String,
    required: true,
  },
  employee: {
    type: String,
  },
});
