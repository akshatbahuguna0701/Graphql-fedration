import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Project {
  @Field((type) => String)
  id: string;

  @Field((type) => String, { nullable: true })
  employee: string;

  /*  @OneToMany(() => Employee, employee => employee.project)
   @Field(() => [Employee], { nullable: true })
   employees: Employee[] */
}
