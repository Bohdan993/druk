export interface ITestimonial {
  id: number;
  attributes: {
    name: string | null;
    review: string | null;
    raiting: "Один" | "Два" | "Три" | "Чотири" | "П'ять" | null;
    town: string | null;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}
