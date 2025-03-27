import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    image: '/src/assets/plant-images/snake-plant.jpg',
    category: 'Indoor',
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: '/src/assets/plant-images/monstera.jpg',
    category: 'Tropical',
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    price: 59.99,
    image: '/src/assets/plant-images/fiddle-leaf.jpg',
    category: 'Indoor',
  },
  {
    id: 4,
    name: 'Succulents Collection',
    price: 24.99,
    image: '/src/assets/plant-images/succulents.jpg',
    category: 'Desert',
  },
  {
    id: 5,
    name: 'Peace Lily',
    price: 34.99,
    image: '/src/assets/plant-images/peace-lily.jpg',
    category: 'Indoor',
  },
  {
    id: 6,
    name: 'Bird of Paradise',
    price: 79.99,
    image: '/src/assets/plant-images/bird-paradise.jpg',
    category: 'Tropical',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {},
});

export default productsSlice.reducer;