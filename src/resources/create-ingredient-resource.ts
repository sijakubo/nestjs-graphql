import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateIngredientResource {
  @Field({ nullable: false })
  name: string;
}