
import {FC, Fragment, Ref, MutableRefObject} from "react";
import OrderStepItem from "./OrderStepItem";
import { Size, useWindowSize } from "@/utils/useWindowSize";
import { Tooltip } from 'react-tooltip';
import { Splide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import OrderWithFilePopup from "../Popups/OrderWithFilePopup";
import OrderWithoutFilePopup from "../Popups/OrderWithoutFilePopup";
import { IClue } from '@/strapitypes/Clue';
import { selectPopupsState } from "@/slices/popups";
import { useAppSelector } from "@/store";
import { useAppDispatch } from '@/store';
import { setShowPopup } from '@/slices/popups';


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

type OrderStepsProps = {
    sliderRef: Ref<Splide>,
    data: IClue[]
}



const OrderSteps: FC<OrderStepsProps> = ({sliderRef, data}) => {

    const size: Size = useWindowSize();
    const popupsState = useAppSelector(selectPopupsState);
    const dispatch = useAppDispatch();

    const handleCloseWithFileTooltip = () => {
        dispatch(setShowPopup({key: "showOrderWithFilePopupResponsive", state: false}));
    }

    const handleCloseWithoutFileTooltip = () => {
        dispatch(setShowPopup({key: "showOrderWithoutFilePopupResponsive", state: false}));
    }

    return (
        (<div className="order-steps absolute w-full md:left-0 md:h-[63px] md:top-[29px] lg:top-[6px] z-10">
            <Splide ref={(slider) => (sliderRef as MutableRefObject<Splide | null>).current = slider} className="order-steps-carousel h-full " options={sliderOptions}>
                {data?.map((s, i) => {
                    return (
                        <Fragment key={s?.id}>
                           <OrderStepItem 
                                id={s?.id}
                                el={s?.attributes}
                                windowSize={size}
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
                    closeOnEsc={true}
                />
                <Tooltip
                    id="order-steps-tooltip-order-with-file"
                    noArrow={true}
                    closeOnEsc={true}
                    className="md:hidden"
                    clickable={true}
                    isOpen={popupsState?.showOrderWithFilePopupResponsive}
                >
                    <div className="w-full max-w-[315px] relative pt-[35px]">
                        <span className="close-tooltip" onClick={handleCloseWithFileTooltip}></span>
                        <OrderWithFilePopup id={"showOrderWithFilePopupResponsive"}/>
                    </div>
                    
                </Tooltip>
                <Tooltip 
                    id="order-steps-tooltip-order-without-file"
                    noArrow={true}
                    closeOnEsc={true}
                    className="md:hidden"
                    clickable={true}
                    isOpen={popupsState?.showOrderWithoutFilePopupResponsive}
                >
                    <div className="w-full max-w-[315px] relative pt-[35px]">
                        <span className="close-tooltip" onClick={handleCloseWithoutFileTooltip}></span>
                        <OrderWithoutFilePopup id={"showOrderWithoutFilePopupResponsive"}/>
                    </div>
                    
                </Tooltip>
            </div>
        </div>)
    );
};

export default OrderSteps;