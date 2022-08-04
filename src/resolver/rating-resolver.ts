import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PubSub } from 'graphql-subscriptions';
import { RatingRepository } from '../repository/rating-repository';
import { CreateRatingResource } from '../resources/create-rating-resource';
import { Rating } from '../resources/rating';

const pubSub = new PubSub();

@Resolver(() => Rating)
export class RatingResolver {

  constructor(private ratingRepository: RatingRepository) {}

  @Subscription(() => Rating)
  async ratingAdded() {
    return pubSub.asyncIterator('ratingAdded');
  }

  @Mutation(() => Rating)
  async createRating(@Args('rating') rating: CreateRatingResource) {
    const createdRating = { id: randomUUID(), ...rating };
    this.ratingRepository.data.push(createdRating);

    await pubSub.publish('ratingAdded', { ratingAdded: createdRating });

    return createdRating;
  }
}