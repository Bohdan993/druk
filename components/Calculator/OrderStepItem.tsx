import {FC} from 'react';
import Image from "next/image";
import type * as CSS from 'csstype';
import { Size } from "@/utils/useWindowSize";
import infoIcon from "@/public/icon-info-2.svg";
import {SplideSlide } from '@splidejs/react-splide';
import { makeTooltipMarkup } from '@/utils/makeTooltipMarkup';
import { IClue } from '@/strapitypes/Clue';
import { baseUrl } from '@/constants';


interface OrderStep {
    id: number,
    windowSize: Size,
    el: IClue['attributes']
}

const OrderStepItem: FC<OrderStep> = ({windowSize, el, id}) => {
    console.log(el);
    return (
        // <></>
        <SplideSlide className={`cursor-pointer md:mr-[10px] last:mr-0 md:px-[15px] lg:px-[18px] justify-center items-center rounded-[15px] md:bg-skin-dark ${!el?.showontablets ? "flex md:hidden lg:flex" : "flex"}`} style={windowSize?.width! > 991 ? el?.customstyle : {}} data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip: el?.clue, list: el?.clueslists})}>
            <div className="flex justify-center items-center">
                {!el?.name  ? (
                    <Image
                        src={baseUrl + el?.image?.data?.attributes?.url}
                        alt="Icon"
                        width={el?.image?.data?.attributes?.width!}
                        height={el?.image?.data?.attributes?.height!}
                        className="min-w-[15px] md:min-w-[20px] max-h-[29px] w-auto"
                    />
                ) : 
                    <>
                        <Image
                            src={baseUrl + el?.image?.data?.attributes?.url}
                            alt="Icon"
                            width={el?.image?.data?.attributes?.width!}
                            height={el?.image?.data?.attributes?.height!}
                            className="min-w-[15px] md:min-w-[20px] max-h-[29px] w-auto block md:hidden"
                        />
                        <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black hidden md:block">{el?.name}</p>
                    </>
                }
            </div>
        </SplideSlide>
    );
};

export default OrderStepItem;