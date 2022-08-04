import { Field, ObjectType } from '@nestjs/graphql';
import { Ingredient } from './ingredient';

@ObjectType()
export class Cupcake {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  stock?: number;

  @Field(() => [Ingredient])
  ingredients: Ingredient[];
}