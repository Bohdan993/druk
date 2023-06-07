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
import { IClue } from '@/strapitypes/Clue';
import { makeTooltipMarkup } from '@/utils/makeTooltipMarkup';
import infoIcon from "@/public/icon-info-2.svg";
import { IConstructorsingle } from '@/strapitypes/Constructorsingle';


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

type CalculatorProps = {
    data: IClue[];
    dataSingle: IConstructorsingle;
}

const Calculator: FC<CalculatorProps> = ({data, dataSingle}) => {

    const rotorSliderRef = useRef<Splide| null>(null);
    const orderStepsSliderRef = useRef<Splide| null>(null);
    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
    const [quantity, setQuantity] = useState('1');
    const [show, setShow] = useState(false);
    let index = 0;

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

    const handleClick = () => {
        setShow(prev => !prev);
    }

    useEffect(() => {
        if (rotorSliderRef?.current?.splide && orderStepsSliderRef?.current?.splide) {
            rotorSliderRef.current.sync(orderStepsSliderRef?.current!.splide!);
        }
  }, [rotorSliderRef,  orderStepsSliderRef]);

    return (
        <div className="calculator bg-skin-dark md:h-auto overflow-x-hidden" id={dataSingle?.attributes?.sectionid || "#"}>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px] relative h-full md:h-auto">
                <div className="md:relative ml-[185px] static">
                    <OrderSteps sliderRef={orderStepsSliderRef} data={data}/>
                </div>
                <div className="md:flex justify-between items-stretch">
                    <div className="basis-[100%] lg:basis-[65.59%] md:pt-[109px] md:mr-[37.5px] md:pb-[65px]">
                        <Splide extensions={{MyExtension}} ref={(slider) => (rotorSliderRef.current = slider)} className="rotor-carousel " aria-label="Books gallery" options={sliderOptions} hasTrack={false}>
                            <SplideTrack>
                                {rotorsState?.map((rotor, i) => {
                                    index = i;
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
                                                <div className="md:hidden absolute right-[25px] top-[60px]" data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip: data[i]?.attributes?.clue, list: data[i]?.attributes?.clueslists})}>
                                                    <Image src={iconInfo} alt="Info Icon" className="min-w-[36px]"/>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    )
                                })}
                                <SplideSlide className="table-slide md:hidden quantity-slide" data-class="quantity-slide">
                                    <div className="relative">
                                        <p className="font-bold leading-[25px] tracking-[0.2em] text-black text-[1.125rem] md:text-[1.281rem] text-center mb-[40px]">Наклад</p>
                                            <QuantityInput
                                                quantity={quantity}
                                                handleQuantityChange={handleQuantityChange}
                                            />
                                            <span className="hidden">{index++}</span>
                                        <div className="md:hidden absolute right-[25px] top-[60px]" data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip: data[index]?.attributes?.clue, list: data[index]?.attributes?.clueslists})}>
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[36px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="table-slide md:hidden table-slide" data-class="table-slide">
                                    <div className="relative">
                                        <p className="font-bold leading-[25px] tracking-[0.2em] text-black text-[1.125rem] md:text-[1.281rem] text-center mb-[40px]">Замовлення</p>
                                        <CalculatorTable quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                                        <span className="hidden">{index++}</span>
                                        <div className="md:hidden absolute right-[25px] top-[60px]"  data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip: data[index]?.attributes?.clue, list: data[index]?.attributes?.clueslists})}>
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[36px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="buttons-slide lg:mt-[-20px]" data-class="buttons-slide">
                                    <div className="relative md:mt-[157px] lg:mt-0">
                                        <OrderButtons/>
                                        <span className="hidden">{index++}</span>
                                        <div className="md:hidden absolute right-[25px] top-[60px]"  data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip: data[index]?.attributes?.clue, list: data[index]?.attributes?.clueslists})}>
                                            <Image src={iconInfo} alt="Info Icon" className="min-w-[36px]"/>
                                        </div>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                    <div className={`lg:pl-[40px] lg:pr-[20px] lg:py-[5px] bg-white-glass rounded-[20px] border-natural-green lg:w-auto lg:ml-[37.5px] lg:basis-[34.41%] lg:pt-[116px] lg:pb-[85px] absolute right-0 bottom-0 lg:static backdrop-blur-[15px] hidden md:flex calculator-table-container lg:translate-x-0 transition-transform duration-[0.25s] ease-in ${show ? "translate-x-0" : "translate-x-[calc(100%-190px)]"}`}>
                        <div className="flex items-center justify-center bg-fiolet rounded-tl-[15px] p-[10px] rounded-bl-[15px] calculator-table-opener lg:hidden" onClick={handleClick}>
                            <p className="font-bold text-skin-light leading-[1.2] tracking-[0.2em] mr-[8px]">Замовити</p>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="42"
                            fill="none"
                            viewBox="0 0 36 42"
                            >
                            <path
                                d="M29.551 5.47a.898.898 0 01-.457-.124C25.28 3.304 21.983 2.437 18.03 2.437c-3.934 0-7.669.97-11.066 2.909-.48.271-1.072.082-1.35-.416a1.066 1.066 0 01.397-1.403A24.218 24.218 0 0118.03.375c4.23 0 7.926.97 11.978 3.135a1.031 1.031 0 01.417 1.382.97.97 0 01-.874.577zM1.124 16.297a1.009 1.009 0 01-.576-.186 1.054 1.054 0 01-.239-1.444c1.967-2.887 4.469-5.156 7.45-6.744 6.237-3.338 14.224-3.362 20.48-.02 2.981 1.587 5.484 3.835 7.45 6.702a1.057 1.057 0 01-.238 1.444.967.967 0 01-1.39-.248c-1.788-2.598-4.053-4.64-6.735-6.063-5.7-3.032-12.992-3.032-18.673.02-2.702 1.444-4.966 3.507-6.754 6.102a.859.859 0 01-.775.436zm12.415 24.897a.915.915 0 01-.695-.31c-1.728-1.797-2.665-2.955-3.993-5.447-1.375-2.537-2.085-5.631-2.085-8.952 0-6.125 5.045-11.117 11.244-11.117 6.198 0 11.247 4.992 11.247 11.117a.995.995 0 11-1.986 0c0-4.991-4.152-9.054-9.257-9.054-5.105 0-9.261 4.063-9.261 9.054 0 2.97.635 5.713 1.846 7.94 1.272 2.373 2.149 3.383 3.676 4.992a1.089 1.089 0 010 1.461c-.195.197-.459.31-.736.316zm14.245-3.815c-2.365 0-4.45-.62-6.159-1.836A11.095 11.095 0 0116.9 26.49a.994.994 0 111.986 0 8.963 8.963 0 003.854 7.342c1.41.99 3.06 1.461 5.046 1.461a12.676 12.676 0 002.063-.206c.536-.103 1.053.268 1.151.845a1.025 1.025 0 01-.813 1.197c-.792.156-1.596.239-2.402.247v.004zm-3.994 4.245a1.114 1.114 0 01-.258-.041c-3.159-.908-5.225-2.125-7.39-4.332-2.782-2.866-4.311-6.682-4.311-10.766 0-3.341 2.741-6.064 6.118-6.064 3.376 0 6.119 2.723 6.119 6.064 0 2.207 1.847 4.002 4.131 4.002 2.285 0 4.132-1.795 4.132-4.002 0-7.775-6.456-14.087-14.402-14.087-5.642 0-10.807 3.26-13.13 8.312-.774 1.67-1.173 3.63-1.173 5.775 0 1.609.139 4.146 1.33 7.446.2.536-.059 1.134-.575 1.32a.976.976 0 01-1.271-.602 23.752 23.752 0 01-1.45-8.164c0-2.475.457-4.726 1.35-6.682 2.643-5.758 8.503-9.488 14.919-9.488 9.039 0 16.39 7.24 16.39 16.15 0 3.34-2.742 6.063-6.12 6.063-3.377 0-6.118-2.722-6.118-6.063 0-2.207-1.847-4.005-4.131-4.005-2.284 0-4.132 1.794-4.132 4.001 0 3.524 1.311 6.827 3.715 9.302 1.89 1.939 3.695 3.008 6.496 3.816.536.144.834.721.695 1.258a.978.978 0 01-.934.787z"
                            ></path>
                            </svg>
                        </div>
                        <CalculatorTable quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;