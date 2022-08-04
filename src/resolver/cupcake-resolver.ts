import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { CupcakeRepository } from '../repository/cupcake-repository';
import { CreateCupcakeResource } from '../resources/create-cupcake-resource';
import { Cupcake } from '../resources/cupcake';
import { Ingredient } from '../resources/ingredient';

@Resolver(() => Cupcake)
export class CupcakeResolver {

  constructor(private cupcakeRepo: CupcakeRepository) {}

  @Query(() => [Cupcake])
  async cupcakes() {
    return this.cupcakeRepo.data;
  }

  @Query(() => Cupcake)
  async cupcake(@Args('id', { type: () => Int }) id: string) {
    return this.cupcakeRepo.data.find(value => value.id === id);
  }

  @ResolveField(() => [Ingredient])
  async ingredients(@Parent() cupcake: Cupcake) {
    return this.cupcakeRepo.data.find(value => value.id === cupcake.id).ingredients;
  }

  @Mutation(() => Cupcake)
  async createCupcake(@Args('cupcake') cupcake: CreateCupcakeResource) {
    const createdCupcake = {
      id: randomUUID(),
      ...cupcake,
      ingredients: cupcake.ingredients.map(value => {
        return {
          id: randomUUID(),
          name: value.name
        };
      }),
    };
    this.cupcakeRepo.data.push(createdCupcake);
    return createdCupcake;
  }
}