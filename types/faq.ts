export interface Faq {
  id: number
  attributes: FaqItem
}

export interface FaqItem {
  active: boolean
  answer: string
  question: string
}