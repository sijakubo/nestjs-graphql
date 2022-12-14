import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRatingResource {
  @Field()
  cupcakeId: string;

  @Field(() => String)
  comment: string;

  @Field(() => Number)
  rating: number;

  @Field({ nullable: true, defaultValue: new Date() })
  createdAt?: Date;
}