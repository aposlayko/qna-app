export interface Question {
  id: string;
  title: string;
  answer: string;
  categoryId: string;
  tags: {
    [key: string]: boolean
  }
}

export type NewQuestion = Omit<Question, 'id'>
