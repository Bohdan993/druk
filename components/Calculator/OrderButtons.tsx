import { FC } from 'react';
import Image from 'next/image';
import searchBookIcon from "@/public/icon-search.svg";
import addFilteIcon from "@/public/icon-add-file.svg";
import { useAppDispatch } from '@/store';
import { setShowPopup } from '@/slices/popups';
import { Size, useWindowSize } from "@/utils/useWindowSize";


const OrderButtons: FC = () => {

    const dispatch = useAppDispatch();
    const size: Size = useWindowSize();

    const handleClick = () => {
        if(size?.width! >= 768) {
            dispatch(setShowPopup({key: "showOrderWithFilePopup", state: true}));
        } else {
            dispatch(setShowPopup({key: "showOrderWithFilePopupResponsive", state: true}));
        }
        
    }

    const handleClick2 = () => {
        if(size?.width! >= 768) {
            dispatch(setShowPopup({key: "showOrderWithoutFilePopup", state: true}));
        } else {
            dispatch(setShowPopup({key: "showOrderWithoutFilePopupResponsive", state: true}));
        }

    }
    return (
        <div>
            <div className="flex lg:justify-center items-center md:items-stretch lg:items-center flex-col-reverse md:flex-row">
                <button onClick={handleClick} className="relative text-center md:text-left h-[167px] md:h-auto lg:h-[167px] bg-white-glass border-[1px] border-natural-green order-button lg:pl-[10px] lg:pr-[87px] lg:mr-[17.5%] md:mr-[30px] md:flex lg:block items-end justify-center md:pb-[26px] lg:pb-0 md:pt-[115px] lg:pt-0" data-tooltip-id={`order-steps-tooltip-order-with-file`}>
                    <div>
                        <p className="text-[1.25rem] md:text-[1rem] font-bold leading-[1.2] tracking-[0.2em] text-[#323843] lg:max-w-[75px] text-center lg:text-left">Замовити книгу зі своїм файлом</p>
                    </div>
                    <div className="absolute rotor flex justify-center items-center">
                        <div className="relative z-10 icon flex justify-center items-center">
                            <Image src={addFilteIcon} alt="Add File"/>
                        </div>
                    </div>
                </button>
                <button onClick={handleClick2} className="relative text-center md:text-right h-[167px] md:h-auto lg:h-[167px] bg-white-glass border-[1px] border-natural-green order-button lg:pr-[10px] lg:pl-[87px] lg:ml-[17.5%] md:flex lg:block items-end justify-center md:pb-[26px] lg:pb-0 md:pt-[115px] lg:pt-0" data-tooltip-id={`order-steps-tooltip-order-without-file`}>
                    <div className="absolute rotor flex justify-center items-center">
                        <div className="relative z-10 icon flex justify-center items-center">
                            <Image src={searchBookIcon} alt="Search Book"/>
                        </div>
                    </div>
                    <div>
                        <p className="text-[1.25rem] md:text-[1rem] font-bold leading-[1.2] tracking-[0.2em] text-[#323843] lg:max-w-[75px] text-center lg:text-right">Замовити пошук книги</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default OrderButtons;