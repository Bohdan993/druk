export interface Faq {
  readonly id: number
  readonly attributes: FaqItem
}

export interface FaqItem {
  active: boolean
  readonly answer: string
  readonly question: string
}