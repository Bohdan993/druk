export interface IConstructor {
  id: number;
  attributes: {
    sectionid: string | null;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}
