import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rating {
  @Field(() => String)
  id: string;

  @Field(() => String)
  comment: string;

  @Field(() => Number)
  rating: number;
}