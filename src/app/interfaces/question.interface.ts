export interface Question {
  id: string;
  title: string;
  answer: string;
  categoryId: string;
  tags: {
    [key: string]: boolean
  },
  userId: string;
}

export type NewQuestion = Omit<Question, 'id'>
