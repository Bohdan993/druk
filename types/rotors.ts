export interface Rotor {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    title: string
    type: "singleselect" | "singleselect2" | "multiselect"
    rotorpiece: Rotorpiece[]
  }
  
  export interface Rotorpiece {
    id: number
    __component: string
    active: boolean
    key: string
    text: string
    image?: Image
  }
  
  export interface Image {
    data: Data
  }
  
  export interface Data {
    id: number
    attributes: ImageAttributes
  }
  
  export interface ImageAttributes {
    url: string
    width: number
    height: number
    name: string
  }

  export interface RotorProps {
    cx: number
    cy: number
    r: number
    w: number
    h: number
    data: Rotor
}