export interface Category {
  id: string;
  name: string;
  imgUrl: string;
}

export type NewCategory = Omit<Category, 'id'>
