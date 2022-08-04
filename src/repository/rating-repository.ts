import { Injectable } from '@nestjs/common';
import { Rating } from '../resources/rating';

@Injectable()
export class RatingRepository {

  public data: Array<Rating> = [
    { id: 'b98c4300-8544-4f31-bb66-863fdfcb8d7a', comment: 'delicious 😍😋', rating: 5, createdAt: new Date('2022-01-01T13:30') },
    { id: '81da44bd-89a5-42d9-88cd-9d39c4f56645', comment: 'taste was awful', rating: 1, createdAt: new Date('2022-01-01T12:00') }
  ];

}