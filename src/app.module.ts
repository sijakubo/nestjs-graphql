import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CupcakeRepository } from './repository/cupcake-repository';
import { RatingRepository } from './repository/rating-repository';
import { CupcakeResolver } from './resolver/cupcake-resolver';
import { RatingResolver } from './resolver/rating-resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      subscriptions: {
        'subscriptions-transport-ws': true
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CupcakeResolver, RatingResolver, CupcakeRepository, RatingRepository],
})
export class AppModule {

}
