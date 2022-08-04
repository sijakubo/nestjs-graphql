import { Field, InputType } from '@nestjs/graphql';
import { CreateIngredientResource } from './create-ingredient-resource';

@InputType()
export class CreateCupcakeResource {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  stock?: number;

  @Field(() => [CreateIngredientResource])
  ingredients: Array<CreateIngredientResource>;
}