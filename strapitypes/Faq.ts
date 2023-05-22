export interface IFaq {
  id: number;
  attributes: {
    question: string | null;
    answer: string | null;
    active: boolean | null;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}
