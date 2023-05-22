export interface Testimonial {
    id: number
    attributes: TestimonialAttributes
}
  
export type TestimonialAttributes = TestimonialItem & {
    createdAt: string
}


export interface TestimonialItem {
    name: string,
    review: string,
    raiting: Raiting,
    town: string
}

export type Raiting = 'Один' | 'Два' | 'Три' | 'Чотири' | 'П\'ять';