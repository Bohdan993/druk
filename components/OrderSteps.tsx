
import {FC, Fragment, useState, forwardRef, Ref, MutableRefObject} from "react";
import fileExchangeIcon from "../public/file-exchange.svg";
import sizeIcon from "../public/icon-size.svg";
import bindingIcon from "../public/icon-binding.svg";
import paperAmountIcon from "../public/icon-paper-amount.svg";
import colorsIcon from "../public/icon-colors.svg";
import otherIcon from "../public/icon-other.svg";
import mingcuteBookIcon from "../public/icon-mingcute-book.svg";
import printerIcon from "../public/icon-printer.svg";
import OrderStepItem from "./OrderStepItem";
import type * as CSS from 'csstype';
import { Size, useWindowSize } from "@/utils/useWindowSize";
import { Tooltip } from 'react-tooltip';
import { Splide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';

interface OrderStep {
    id: number,
    content: string,
    tooltip: string,
    customStyle: CSS.Properties,
    showOnMobile: boolean
}

type OrderStepsProps = {
    sliderRef: Ref<Splide>
}

const steps: OrderStep[] = [
    {
        content: fileExchangeIcon, 
        id: 1,
        tooltip: "Дизайн <br> палітурки за \n допомогою \n штучного \n інтелекту",
        customStyle: {},
        showOnMobile: true
    },
    {
        content: sizeIcon, 
        id: 2,
        tooltip: "Оберіть формат файлу",
        customStyle: {},
        showOnMobile: true
    },
    {
        content: bindingIcon, 
        id: 3,
        tooltip: "Оберіть формат файлу",
        customStyle: {},
        showOnMobile: true
    },
    {
        content: paperAmountIcon, 
        id: 4,
        tooltip: "Оберіть формат файлу",
        customStyle: {},
        showOnMobile: true
    },
    {
        content: colorsIcon, 
        id: 5,
        tooltip: "Оберіть формат файлу",
        customStyle: {},
        showOnMobile: true
    },
    {
        content: otherIcon, 
        id: 6,
        tooltip: "Оберіть формат файлу",
        customStyle: {
            marginRight: "75px"
        },
        showOnMobile: true
    },
    {
        content: mingcuteBookIcon, 
        id: 7,
        tooltip: "Оберіть формат файлу",
        customStyle: {
            marginRight: "25px"
        },
        showOnMobile: true
    },
    {
        content: "Вартість", 
        id: 8,
        tooltip: "Оберіть формат файлу",
        customStyle: {
            marginRight: "25px"
        },
        showOnMobile: false
    },
    {
        content: printerIcon, 
        id: 9,
        tooltip: "Оберіть формат файлу",
        customStyle: {},
        showOnMobile: true
    }
]

const sliderOptions: Options = {
    type: "loop",
    perPage: 7,
    arrows: false,
    pagination: false,
    perMove: 1,
    focus: "center",
    updateOnMove: true,
    start: 0,
    gap: 0,
    keyboard: 'global',
    drag:false,
    mediaQuery: 'min',
    breakpoints: {
        768: {
            destroy: true,
        },
    }
};





const OrderSteps: FC<OrderStepsProps> = ({sliderRef}) => {

    const [data, setData] = useState<OrderStep[]>(steps);
    const size: Size = useWindowSize();

    return (

        (<div className="order-steps absolute w-full md:left-0 md:h-[63px] md:top-[29px] lg:top-[6px] z-10">
            <Splide ref={(slider) => (sliderRef as MutableRefObject<Splide | null>).current = slider} className="order-steps-carousel h-full " options={sliderOptions}>
                {data?.map((s, i) => {
                    return (
                        <Fragment key={s?.id}>
                           <OrderStepItem 
                                id={s?.id}
                                content={s?.content}
                                tooltip={s?.tooltip}
                                customStyle={s?.customStyle}
                                windowSize={size}
                                showOnMobile={s?.showOnMobile}
                           />
                        </Fragment>
                    )
                })}
            </Splide>
            <div className="order-steps-tooltip-container">
                <Tooltip 
                    id="order-steps-tooltip"
                    noArrow={true}
                    positionStrategy={"fixed"}
                    place={"bottom"}
                    setIsOpen={(val) => true}
                    closeOnEsc={true}
                />
            </div>
        </div>)
    );
};

export default OrderSteps;