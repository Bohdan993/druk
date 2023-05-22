import { FC, useRef, useEffect, useState, ChangeEvent } from 'react';
import CalculatorTable from './CalculatorTable';
import OrderSteps from './OrderSteps';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import { useAppSelector } from '@/store';
import { selectRotorsState } from '@/slices/rotors';
import { Rotor as RotorType } from '@/types/rotors';
import RotorWrapper from './RotorWrapper';
import OrderButtons from './OrderButtons';
import iconInfo from "@/public/icon-info-2.svg";
import Image from 'next/image';
import { QuantityInput} from './QuantityInput';
import { MyExtension } from '@/utils/splideExtension';



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
    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
    const [quantity, setQuantity] = useState('1');


    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement> | {target: {value: string}}) => {
        let inputValue =  e.target.value.replace(/\D/, "");
        let intInputValue = parseInt(inputValue);
        if(intInputValue > 9999 ) {
            inputValue = "9999";
        } else if (!intInputValue) {
            inputValue = "1";
        }
        setQuantity(inputValue);
    }

    useEffect(() => {
        if (rotorSliderRef?.current?.splide && orderStepsSliderRef?.current?.splide) {
            rotorSliderRef.current.sync(orderStepsSliderRef?.current!.splide!);
        }
  }, [rotorSliderRef,  orderStepsSliderRef]);

    return (
        <div className="calculator bg-skin-dark md:h-auto">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px] relative h-full md:h-auto">
                <div className="md:relative ml-[185px] static">
                    <OrderSteps sliderRef={orderStepsSliderRef}/>
                </div>
                <div className="md:flex justify-between items-stretch">
                    <div className="basis-[100%] lg:basis-[65.59%] md:pt-[109px] md:mr-[37.5px] md:pb-[65px]">
                        <Splide extensions={{MyExtension}} ref={(slider) => (rotorSliderRef.current = slider)} className="rotor-carousel " aria-label="Books gallery" options={sliderOptions} hasTrack={false}>
                            <SplideTrack>
                                {rotorsState?.map((rotor, i) => {
                                    return (
                                        <SplideSlide key={rotor.id}>
                                            <div className="basis-[33%] md:mx-[5px] shrink relative">
                                                <RotorWrapper
                                                    w={185}
                                                    h={185}
                                                    cx={92.5}
                                                    cy={92.5}
                                                    r={92.5}
                                                    type={rotor?.attributes?.type}
                                                    data={rotor}

                                                />
                                                <div className="md:hidden absolute right-[25px] top-[60px]">
                                                    <Image src={iconInfo} alt="Info Icon" className="min-w-[25px]"/>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    )
                                })}
                                <SplideSlide className="table-slide md:hidden" data-class="quantity-slide">
                                    <div className="relative">
                                            <QuantityInput
                                                quantity={quantity}
                                                handleQuantityChange={handleQuantityChange}
                                            />
                                        <div className="md:hidden absolute right-[25px] top-[60px]">
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[25px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="table-slide md:hidden" data-class="table-slide">
                                    <div className="relative">
                                        <CalculatorTable quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                                        <div className="md:hidden absolute right-[25px] top-[60px]">
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[25px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="buttons-slide md:mt-[-20px]" data-class="buttons-slide">
                                    <div className="relative">
                                        <OrderButtons/>
                                        <div className="md:hidden absolute right-[25px] top-[60px]">
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[25px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                    <div className="pl-[40px] pr-[20px] py-[5px] bg-white-glass rounded-[20px] border-natural-green ml-[37.5px] lg:basis-[34.41%] lg:pt-[116px] lg:pb-[85px] absolute right-0 bottom-0 lg:static backdrop-blur-[15px] hidden md:block">
                        <CalculatorTable quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;