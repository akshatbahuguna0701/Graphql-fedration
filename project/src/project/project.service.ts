import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectInput } from './dto/create-project.input';
import { ProjectInterface } from './interface/project.interface';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('project')
    private readonly projectModel: Model<ProjectInterface>,
  ) {}

  async create(createProjectDto: CreateProjectInput) {
    try {
      const data = await this.projectModel.create(createProjectDto);
      return data;
    } catch (err) {
      return err;
    }
  }

  async findAll() {
    return this.projectModel.find();
  }

  async findOne(id: string) {
    return this.projectModel.findOne({ id });
  }
}
