import { selectPopupsState, setPopusClose } from "@/slices/popups";
import { useAppDispatch, useAppSelector } from "@/store";
import { FC, ReactNode, cloneElement, useEffect} from "react";
// @ts-ignore
import Rodal from "rodal";
import {Popups as PopupsType} from "@/types/popups";
import TestimonialsPopup from "./TestimonialsPopup";
import TestimonialsThanksPopup from "./TestimonialsThanksPopup";
import OrderThanksPopup from "./OrderThanksPopup";
import FailPopup from "./FailPopup";
import OrderWithFilePopup from "./OrderWithFilePopup";
import OrderWithoutFilePopup from "./OrderWithoutFilePopup";
import { IHeader } from '../../strapitypes/Header';
import TabletBurger from "./TabletBurger";
import MobileBurger from "./MobileBurger";




type PopupsData = {
    [key in keyof PopupsType]: ReactNode
}

const popups: PopupsData = {
    showOrderThanksPopup: <OrderThanksPopup/>,
    showOrderWithFilePopup: <OrderWithFilePopup/>,
    showOrderWithoutFilePopup: <OrderWithoutFilePopup/>,
    showTestimonialsThanksPopup: <TestimonialsThanksPopup/>,
    showTestimonialsPopup: <TestimonialsPopup/>,
    showFailPopup: <FailPopup/>,
    showBurgerTabletPopup: <TabletBurger/>,
    showBurgerMobilePopup: <MobileBurger/>
}

type PopupsProps = {
    burgerData: IHeader["attributes"]["menu"];
}

const Popups: FC<PopupsProps> = ({burgerData}) => {
    
    const dispatch = useAppDispatch();
    const popupsState = useAppSelector(selectPopupsState);
    const activePopup = Object.entries(popupsState).filter(el => el[1])?.[0]?.[0];


    const handleClose = () => {
        dispatch(setPopusClose());
    }

    const ActivePopup = (popups as any)[activePopup] || <></>;

    const ActivePopupWithProps = cloneElement(
        ActivePopup, 
        { 
            id: activePopup,
            onClose: handleClose,
            burgerData
         }
      );

    const isSomePopupVisible = Object.values(popupsState).some(Boolean);
    



    useEffect(()=>{
        if(isSomePopupVisible) {
            document.body.classList.add("overflow-hidden", "w-full");
        } else {
            document.body.classList.remove("overflow-hidden", "w-full");
        }
    }, [isSomePopupVisible])

    return (
        <div className="popups">
            <Rodal visible={isSomePopupVisible} onClose={handleClose} animation={"fade"} className={`${activePopup}`}>
                {ActivePopupWithProps}
            </Rodal>
        </div>
    );
};

export default Popups;