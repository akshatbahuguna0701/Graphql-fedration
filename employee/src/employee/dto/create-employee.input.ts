import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateDTO {
  @Field()
  id: string;

  @Field()
  projectId: string;
}
