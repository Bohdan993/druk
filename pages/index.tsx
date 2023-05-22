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
import { faqsApi } from "@/api/faqs-api";
import { aboutApi } from "@/api/about-api";
import Popups from "@/components/Popups/Popups";
import { getTowns } from "@/thunks/towns";
import { footerApi } from "@/api/footer-api";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { testimonialsApi } from "@/api/testimonials-api";
import { headerApi } from "@/api/header-api";
import { IHeader } from './../strapitypes/Header';








type HomePageProps = {
  faqs: FaqType[];
  about: any;
  footer: any;
  testimonials: any;
  header:IHeader;
}

const Home: NextPage<HomePageProps> = ({faqs, about, footer, testimonials, header}) => {

  console.log(header);

  return (
    <>
      <Header data={header}/>
      <main>
        <Calculator/>
        <Gallery/>
        <Faq data={faqs}/>
        <Testimonials data={testimonials}/>
        <About data={about}/>
        <Popups burgerData={header?.attributes?.menu}/>   
      </main>
      <Footer data={footer}/>
    </>
  )
}


export const getServerSideProps =  wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({req, res, ...etc}) => {
      // res.setHeader(
      //   'Cache-Control',
      //   'public, s-maxage=10, stale-while-revalidate=59',
      // );
      const [faqs, about, footer, testimonials, header]  = await Promise.all([
        faqsApi.getFaqs(), 
        aboutApi.getAbout(), 
        footerApi.getFooter(),
        testimonialsApi.getTestimonials(),
        headerApi.getHeader(),
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
          header
        },
      };
    }
);


export default Home;