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







type HomePageProps = {
  faqs: FaqType[];
  about: any;
  footer: any;
  testimonials: any;
  header:IHeader;
  gallery: IGallery[],
  gallerySingle:IGallerysingle,
  clues: IClue[]
}

const Home: NextPage<HomePageProps> = ({faqs, about, footer, testimonials, header, gallery, gallerySingle, clues}) => {

  return (
    <>
      <Header data={header}/>
      <main>
        <Calculator data={clues}/>
        <Gallery data={gallery} dataSingle={gallerySingle}/>
        <Faq data={faqs}/>
        <Testimonials data={testimonials}/>
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
      const [faqs, about, footer, testimonials, header, gallery, gallerySingle, clues]  = await Promise.all([
        faqsApi.getFaqs(), 
        aboutApi.getAbout(), 
        footerApi.getFooter(),
        testimonialsApi.getTestimonials(),
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
          faqs,
          about,
          footer,
          testimonials,
          header,
          gallery,
          gallerySingle,
          clues
        },
      };
    }
);


export default Home;