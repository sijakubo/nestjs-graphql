import { Injectable } from '@nestjs/common';
import { Cupcake } from '../resources/cupcake';

@Injectable()
export class CupcakeRepository {

  public data: Array<Cupcake> = [
    {
      id: '75704232-60ce-48b4-8afb-c0f1ed5a3a20',
      name: 'Basic',
      stock: 3,
      ingredients: [
        { id: 'eceaa52b-3a60-433c-8c1d-cbb7ff7c51f3', name: 'sugar' },
        { id: 'f157fa0a-7691-45fe-be00-db199a36044b', name: 'flour' }
      ]
    },
    {
      id: '2829feb2-6277-4ea9-8366-3d404446aa07',
      name: 'Choc',
      stock: 3,
      ingredients: [
        { id: '75fde975-0ed4-4f51-8118-9bc7bd93c080', name: 'sugar' },
        { id: '0f28df7f-9113-4fdf-b7e2-6cbbd5ae0b2b', name: 'flour' },
        { id: 'e0cd99f5-ee7c-4e67-b57e-f9a2e2ff9970', name: 'chocolate' }]
    },
    {
      id: 'c50e7bb8-09ce-4ae2-85a7-49e066b73cbc',
      name: 'Double Choc',
      stock: 3,
      ingredients: [
        { id: 'be618910-f60a-4e6d-8284-065a1b49d841', name: 'sugar' },
        { id: '45d80558-c526-4b80-9f1e-a681d8178e15', name: 'flour' },
        { id: 'ba72bf2e-83cb-4c02-9482-9af0cd6f94ff', name: 'chocolate' }]
    },
  ];

}