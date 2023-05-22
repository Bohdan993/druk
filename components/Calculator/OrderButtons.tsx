import { FC } from 'react';
import Image from 'next/image';
import searchBookIcon from "@/public/icon-search.svg";
import addFilteIcon from "@/public/icon-add-file.svg";
import { useAppDispatch } from '@/store';
import { setShowPopup } from '@/slices/popups';


const OrderButtons: FC = () => {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setShowPopup({key: "showOrderWithFilePopup", state: true}));
    }

    const handleClick2 = () => {
        dispatch(setShowPopup({key: "showOrderWithoutFilePopup", state: true}));
    }
    return (
        <div>
            <div className="flex justify-center items-center flex-col-reverse md:flex-row">
                <button onClick={handleClick} className="relative text-center md:text-left h-[167px] bg-white-glass border-[1px] border-natural-green order-button md:pl-[10px] md:pr-[87px] md:mr-[17.5%]">
                    <div>
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[#323843] md:max-w-[75px]">Замовити книгу зі своїм файлом</p>
                    </div>
                    <div className="absolute rotor flex justify-center items-center">
                        <div className="relative z-10 icon flex justify-center items-center">
                            <Image src={addFilteIcon} alt="Add File"/>
                        </div>
                    </div>
                </button>
                <button onClick={handleClick2} className="relative text-center md:text-right h-[167px] bg-white-glass border-[1px] border-natural-green order-button md:pr-[10px] md:pl-[87px] md:ml-[17.5%]">
                    <div className="absolute rotor flex justify-center items-center">
                        <div className="relative z-10 icon flex justify-center items-center">
                            <Image src={searchBookIcon} alt="Search Book"/>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[#323843] md:max-w-[75px]">Замовити пошук книги</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default OrderButtons;