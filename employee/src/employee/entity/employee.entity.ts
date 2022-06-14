import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Project } from './project.entity';
// import { Location } from './location.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Employee {
  @Field((type) => String)
  id: string;

  /*  @ManyToOne(() => Project, project => project.employees) */
  @Field(() => Project)
  project: Project;

  // @Field((type) => Location)
  // location: Location;

  @Field()
  projectId: string;

  // @Field()
  // locationId: string;
}
