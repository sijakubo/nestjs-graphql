import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PubSub } from 'graphql-subscriptions';
import { RatingRepository } from '../repository/rating-repository';
import { CreateRatingResource } from '../resources/create-rating-resource';
import { Rating } from '../resources/rating';

const pubSub = new PubSub();

@Resolver(() => Rating)
export class RatingResolver {
  private readonly topicRatingAdded = 'ratingAdded';

  private readonly logger = new Logger(RatingResolver.name);

  constructor(private ratingRepository: RatingRepository) {}

  @Subscription(() => Rating)
  async ratingAdded() {
    this.logger.debug(`adding client to subscription '${this.topicRatingAdded}'`);
    return pubSub.asyncIterator(this.topicRatingAdded);
  }

  @Mutation(() => Rating)
  async createRating(@Args('rating') rating: CreateRatingResource) {
    this.logger.debug(`creating rating`, rating);
    const createdRating = { id: randomUUID(), ...rating };
    this.ratingRepository.data.push(createdRating);

    await pubSub.publish(this.topicRatingAdded, { ratingAdded: createdRating });

    return createdRating;
  }
}