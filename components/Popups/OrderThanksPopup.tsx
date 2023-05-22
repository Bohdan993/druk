import {FC} from "react";
import iconSuccess from "@/public/icon-success.svg";
import Image from "next/image";


const OrderThanksPopup: FC<any> = ({onClose}) => {


    return (    
        <div className="flex justify-center items-center flex-col">
            <div className="mb-[25px]">
                <Image src={iconSuccess} alt="Icon Success"/>
            </div>
            <div className="mb-[22.5px]">
                <p className="text-[1.25rem] leading-[1.2] tracking-[0.185em] font-[600] text-black-2 text-center">
                    Ваше замовлення опрацьовується!
                </p>
            </div>
            <div className="mb-[22.5px]">
                <p className="text-center leading-[1.2] tracking-[0.2em] font-[500] text-black-2 mb-[5px]">{"З Вами зв'яжеться наш менеджер для уточнення деталей."}</p>
                <p className="text-center leading-[1.2] tracking-[0.2em] font-[500] text-black-2">{"Дякуємо за довіру."}</p>
            </div>
            <div className="w-full flex justify-center">
                <a href="#header" onClick={onClose} className="popup-btn-1 max-w-[303px!important]">Повернутися на головну</a>
            </div>
        </div>
    )
};

export default OrderThanksPopup;