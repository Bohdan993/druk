import {FC} from 'react';
import Image from "next/image";
import type * as CSS from 'csstype';
import { Size } from "@/utils/useWindowSize";
import infoIcon from "@/public/icon-info-2.svg";
import {SplideSlide } from '@splidejs/react-splide';
import { makeTooltipMarkup } from '@/utils/makeTooltipMarkup';


interface OrderStep {
    id: number,
    content: string,
    tooltip: string,
    customStyle: CSS.Properties,
    windowSize: Size,
    showOnMobile: boolean
}

const OrderStepItem: FC<OrderStep> = ({content, windowSize, customStyle, tooltip, showOnMobile}) => {
    return (
        <SplideSlide className={`cursor-pointer md:mr-[10px] last:mr-0 md:px-[15px] lg:px-[18px] justify-center items-center rounded-[15px] md:bg-skin-dark ${!showOnMobile ? "flex md:hidden lg:flex" : "flex"}`} style={windowSize?.width! > 991 ? customStyle : {}} data-tooltip-id={`order-steps-tooltip`} data-tooltip-html={makeTooltipMarkup({icon: infoIcon, tooltip})}>
            <div className="flex justify-center items-center">
                {typeof content === "object" ? (
                    <Image
                        src={content}
                        alt="Icon"
                        className="min-w-[15px] md:min-w-[20px] max-h-[29px] w-auto"
                    />
                ) : 
                    <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black">{content}</p>
                }
            </div>
        </SplideSlide>
    );
};

export default OrderStepItem;