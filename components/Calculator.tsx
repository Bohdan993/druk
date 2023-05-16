import Image from 'next/image';
import { FC, useRef, useEffect } from 'react';
import CalculatorTable from './CalculatorTable';
import OrderSteps from './OrderSteps';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import searchBookIcon from "../public/icon-search.svg";
import addFilteIcon from "../public/icon-add-file.svg";
import { useAppSelector } from '@/store';
import { selectCalculatorTableState } from '@/slices/calculator-table';
import { selectRotorsState } from '@/slices/rotors';
import { Rotor as RotorType } from '@/types/rotors';
import RotorWrapper from './RotorWrapper';




const sliderOptions: Options = {
    perPage: 1,
    arrows: false,
    pagination: true,
    perMove: 1,
    updateOnMove: true,
    start: 0,
    gap: 0,
    keyboard: 'global',
    mediaQuery: 'min',
    breakpoints: {
        768: {
            destroy: true,
        },
    }
};



const Calculator: FC = () => {

    const rotorSliderRef = useRef<Splide| null>(null);
    const orderStepsSliderRef = useRef<Splide| null>(null);
    const calculatorTableState = useAppSelector(selectCalculatorTableState);
    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);

    console.log(rotorsState)

    useEffect(() => {
        if (rotorSliderRef?.current?.splide && orderStepsSliderRef?.current?.splide) {
            rotorSliderRef.current.sync(orderStepsSliderRef?.current!.splide!)
        }
  }, [rotorSliderRef,  orderStepsSliderRef]);

    return (
        <div className="calculator bg-skin-dark md:h-auto">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px] relative h-full md:h-auto">
                <div className="md:relative ml-[185px] static">
                    <OrderSteps sliderRef={orderStepsSliderRef}/>
                </div>
                <div className="md:flex justify-between items-stretch">
                    <div className="basis-[100%] lg:basis-[65.59%] pt-[150px] md:pt-[109px] md:mr-[37.5px] md:pb-[65px]">
                        <Splide  ref={(slider) => (rotorSliderRef.current = slider)} className="rotor-carousel " aria-label="Books gallery" options={sliderOptions} hasTrack={false}>
                            <SplideTrack>
                                {rotorsState?.map(rotor => {
                                    return (
                                        <SplideSlide key={rotor.id}>
                                            <div className="basis-[33%] md:mx-[5px] shrink">
                                                <RotorWrapper
                                                    w={185}
                                                    h={185}
                                                    cx={92.5}
                                                    cy={92.5}
                                                    r={92.5}
                                                    type={rotor?.attributes?.type}
                                                    data={rotor}

                                                />
                                            </div>
                                        </SplideSlide>
                                    )
                                })}
                                <SplideSlide className="table-slide md:hidden">
                                    <CalculatorTable/>
                                </SplideSlide>
                                <SplideSlide className="buttons-slide md:mt-[-20px]">
                                    <div className="flex justify-center items-center">
                                        <button className="relative text-left h-[167px] bg-white-glass border-[1px] border-natural-green order-button ps-[10px] pe-[87px] md:mr-[17.5%]">
                                            <div className="">
                                                <p className="font-bold leading-[1.2] tracking-[0.2em] text-[#323843] md:max-w-[75px]">Замовити книгу зі своїм файлом</p>
                                            </div>
                                            <div className="absolute rotor flex justify-center items-center">
                                                <div className="relative z-10 icon flex justify-center items-center">
                                                    <Image src={addFilteIcon} alt="Add File"/>
                                                </div>
                                            </div>
                                        </button>
                                        <button className="relative text-right h-[167px] bg-white-glass border-[1px] border-natural-green order-button pe-[10px] ps-[87px] md:ml-[17.5%]">
                                            <div className="absolute rotor flex justify-center items-center">
                                                <div className="relative z-10 icon flex justify-center items-center">
                                                    <Image src={searchBookIcon} alt="Search Book"/>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="font-bold leading-[1.2] tracking-[0.2em] text-[#323843] md:max-w-[75px]">Замовити пошук книги</p>
                                            </div>
                                        </button>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                    <div className="pl-[40px] pr-[20px] py-[5px] bg-white-glass rounded-[20px] border-natural-green ml-[37.5px] lg:basis-[34.41%] lg:pt-[116px] lg:pb-[85px] absolute right-0 bottom-0 lg:static backdrop-blur-[15px] hidden md:block">
                        <CalculatorTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;