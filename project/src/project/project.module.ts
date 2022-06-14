import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';
import { ProjectSchema } from './schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'project',
        schema: ProjectSchema,
        collection: 'projects',
      },
    ]),
  ],
  providers: [ProjectResolver, ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
