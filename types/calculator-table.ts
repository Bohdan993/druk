export interface FileDimensions {
    A4: Colors
    A5: Colors
    B5: Colors
    SERVICES: any
  }
  
  export interface Colors {
    "B&W": Bounding
    COLOR: Bounding
  }
  
  export interface Bounding {
    HARD: Format
    SOFT: Format
  }
  
  export interface Format {
    FB2: Pages
    PDF: Pages
    DJVU: Pages
    EPUB: Pages
  }
  
  export interface Pages {
    "<100": string
    "<200": number
    "<300": number
    "<400": number
    "<500": number
    "<600": number
    "<700": number
    "<800": number
    "<900": number
    "<1000": number
  }
  
  