import {FC} from "react";
import iconFail from "@/public/icon-fail.svg";
import Image from "next/image";


const FailPopup: FC<any> = ({onClose}) => {


    return (    
        <div className="flex justify-center items-center flex-col">
            <div className="mb-[25px]">
                <Image src={iconFail} alt="Icon Error"/>
            </div>
            <div className="mb-[25px]">
                <p className="text-[1.25rem] leading-[1.2] tracking-[0.185em] font-[600] text-center text-fail">
                    Нажаль сталась помилка. Спробуйте ще раз!
                </p>
            </div>
            <div className="mb-[25px]">
                <p className="text-center leading-[1.2] tracking-[0.2em] font-[500] text-black-2 mb-[10px]">{"Перевірте чи заповнена правильно вся форма."}</p>
                <p className="text-center leading-[1.2] tracking-[0.2em] font-[500] text-black-2">{"Не залишайте порожніх полів."}</p>
            </div>
            <div className="w-full flex justify-center">
                <button type="button" onClick={onClose} className="popup-btn-2 max-w-[303px!important]">Спробувати ще раз</button>
            </div>
        </div>
    )
};

export default FailPopup;