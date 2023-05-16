import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import { selectRotorsState, setActiveRotorsKeys } from "@/slices/rotors";
import { useAppDispatch, useAppSelector, wrapper } from "@/store";
import { getPriceTable } from "@/thunks/calculator-table";
import { getRotors } from "@/thunks/rotors";
import type { NextPage } from "next";
import { useEffect } from "react";
import { Faq as FaqType } from './../types/faq'
import { Rotor as RotorType } from '@/types/rotors';
import { faqsApi } from "@/api/faqs-api";
import { aboutApi } from "@/api/about-api";




type HomePageProps = {
  faqs: FaqType[];
  about: any
}

const Home: NextPage<HomePageProps> = ({faqs, about}) => {

  const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
  const dispatch = useAppDispatch();

  console.log(about);

  useEffect(() => {
    const activeRotorsKeys = rotorsState?.map(rotor => {
        return rotor.attributes.rotorpiece.map(rp => {
          if(rp?.active) {
            return rp?.key;
          }
          return '';
        }).filter(Boolean);
    }).filter(Boolean).flat();
    dispatch(setActiveRotorsKeys(activeRotorsKeys));
  }, [dispatch, rotorsState]);

  return (
    <main>
      <Calculator/>
      <Gallery/>
      <Faq data={faqs}/>
      <Testimonials/>
      <About data={about}/>
    </main>
  )
}


export const getServerSideProps =  wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await Promise.all([dispatch(getPriceTable()), dispatch(getRotors())]);
      const faqs = await faqsApi.getFaqs();
      const about = await aboutApi.getAbout();
      return {
        props: {
          faqs,
          about
        },
      };
    }
);


export default Home;