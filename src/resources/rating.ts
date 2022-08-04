import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rating {
  @Field()
  id: string;

  @Field()
  comment: string;

  @Field()
  rating: number;

  @Field()
  createdAt: Date;
}