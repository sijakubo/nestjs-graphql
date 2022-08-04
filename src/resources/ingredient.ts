import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ingredient {
  @Field()
  id: string;

  @Field()
  name: string;
}