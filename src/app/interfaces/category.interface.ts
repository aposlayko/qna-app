export interface Category {
  id: string;
  name: string;
  imgUrl: string;
  userId: string;
}

export type NewCategory = Omit<Category, 'id'>
