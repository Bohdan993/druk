import {FC} from 'react';

const TestimonialsThanksPopup: FC<any> = ({onClose}) => {


    return (    
        <div className="flex justify-center items-center flex-col">
            <div className="mb-[25px]">
                <p className="text-[1.25rem] leading-[1.2] tracking-[0.185em] font-[600] text-black-2 text-center">
                    Дякуємо за відгук! Це дуже важливо для нас.
                </p>
            </div>
            <div className="w-full flex justify-center">
                <a href="#header" onClick={onClose} className="popup-btn-1 text-center max-w-[303px!important]">Повернутися на головну</a>
            </div>
        </div>
    )
};

export default TestimonialsThanksPopup;