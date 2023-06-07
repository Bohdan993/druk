import About from "@/components/About";
import Calculator from "@/components/Calculator/Calculator";
import Faq from "@/components/Faq/Faq";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import { wrapper } from "@/store";
import { getPriceTable } from "@/thunks/calculator-table";
import { getRotors } from "@/thunks/rotors";
import type { NextPage } from "next";
import { Faq as FaqType } from './../types/faq'
import { faqsApi } from "@/fetch/faqs-api";
import { aboutApi } from "@/fetch/about-api";
import Popups from "@/components/Popups/Popups";
import { getTowns } from "@/thunks/towns";
import { footerApi } from "@/fetch/footer-api";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { testimonialsApi } from "@/fetch/testimonials-api";
import { headerApi } from "@/fetch/header-api";
import { IHeader } from './../strapitypes/Header';
import { IGallerysingle } from './../strapitypes/Gallerysingle';
import { IGallery } from './../strapitypes/Gallery';
import { galleryApi } from "@/fetch/gallery-api";
import { IClue } from '@/strapitypes/Clue';
import { cluesApi } from "@/fetch/clues-api";
import { IFaqsingle } from './../strapitypes/Faqsingle';
import { rotorsApi } from "@/fetch/rotors-api";
import { IConstructorsingle } from '@/strapitypes/Constructorsingle';
import { ITestimonialsingle } from './../strapitypes/Testimonialsingle';






type HomePageProps = {
  constructorSingle: IConstructorsingle;
  faqs: FaqType[];
  faqsSingle: IFaqsingle;
  about: any;
  footer: any;
  testimonials: any;
  testimonialsSingle: ITestimonialsingle;
  header: IHeader;
  gallery: IGallery[],
  gallerySingle:IGallerysingle,
  clues: IClue[]
}

const Home: NextPage<HomePageProps> = ({constructorSingle, faqs, faqsSingle, about, footer, testimonials, testimonialsSingle, header, gallery, gallerySingle, clues}) => {

  return (
    <>
      <Header data={header}/>
      <main>
        <Calculator data={clues} dataSingle={constructorSingle}/>
        <Gallery data={gallery} dataSingle={gallerySingle}/>
        <Faq data={faqs} dataSingle={faqsSingle}/>
        <Testimonials data={testimonials} dataSingle={testimonialsSingle}/>
        <About data={about}/>
        <Popups burgerData={{menu: header?.attributes?.menu, phone: header?.attributes?.phone, social: header?.attributes?.social}}/>   
      </main>
      <Footer data={footer}/>
    </>
  )
}


export const getServerSideProps =  wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({req, res}) => {
      // res.setHeader(
      //   'Cache-Control',
      //   'public, s-maxage=10, stale-while-revalidate=59',
      // );
      const [constructorSingle, faqs, faqsSingle, about, footer, testimonials, testimonialsSingle, header, gallery, gallerySingle, clues]  = await Promise.all([
        rotorsApi.getConstructorSingle(),
        faqsApi.getFaqs(), 
        faqsApi.getFaqsSingle(),
        aboutApi.getAbout(), 
        footerApi.getFooter(),
        testimonialsApi.getTestimonials(),
        testimonialsApi.getTestimonialsSingle(),
        headerApi.getHeader(),
        galleryApi.getGallery(),
        galleryApi.getGallerySingle(),
        cluesApi?.getClues(),
        dispatch(getPriceTable()), 
        dispatch(getRotors()),
        dispatch(getTowns())
      ]);


      return {
        props: {
          constructorSingle,
          faqs,
          faqsSingle,
          about,
          footer,
          testimonials,
          testimonialsSingle,
          header,
          gallery,
          gallerySingle,
          clues
        },
      };
    }
);


export default Home;