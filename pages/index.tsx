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
import { FileDimensions } from './../types/calculator-table'
import { Rotor as RotorType } from '@/types/rotors';




type HomePageProps = {
  priceTable: FileDimensions,
}

const Home: NextPage<HomePageProps> = () => {

  const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
  const dispatch = useAppDispatch();

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
      <Faq/>
      <Testimonials/>
      <About/>
    </main>
  )
}


export const getServerSideProps =  wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await Promise.all([dispatch(getPriceTable()), dispatch(getRotors())]);
      
      return {
        props: {
        },
      };
    }
);


export default Home;