import Image from 'next/image';
import {FC, MouseEvent} from 'react';
import iconArrow from "@/public/icon-arrow.svg";
import parse from 'html-react-parser';


type FaqItemProps = {
    id: number;
    answer: string;
    question: string;
    active: boolean;
    handleClick: (id: number, e: MouseEvent<HTMLDivElement>) => void;
}

const FaqItem: FC<FaqItemProps> = ({question, answer, id, active, handleClick}) => {
    return (
        <div  className={`flex justify-start items-stretch mb-[25px] last:mb-[0] relative`}>
            <div className={`${active ? "bg-skin-light border-[1px] border-black lg:rounded-none lg:border-r-0" : "bg-natural-green border-[1px] border-transparent "} cursor-pointer rounded-r-[20px] flex items-center min-h-[55px] lg:h-[55px] lg:min-h-[unset] w-full md:w-auto justify-between md:justify-start`} onClick={(e) => handleClick(id, e)}>
                <div className={`faq-question relative grow md:grow-0 flex items-center md:w-[524px] h-full px-[30px] font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.125rem] border-r-[1px] border-black ${active ? "active": ""}`}>
                    <p>
                        {question}
                    </p>
                    <div>
                        {
                            active ? (            
                                <div className="faq-answer z-10 grow rounded-tr-[20px] font-normal border-t-0 border-[1px] border-black bg-skin-light py-[14px] px-[30px] leading-[1.2] tracking-[0.1em] text-[1rem] absolute block lg:hidden">
                                    <p className="z-20 relative">
                                        {parse(String(answer))}
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className={`${active ? "lg:pl-[30px] lg:pr-[80px]" : "lg:px-[30px]"} px-[30px] h-full flex items-center justify-center md:min-w-[75px] rotate-[90deg] lg:rotate-0`}>
                    <Image src={iconArrow} alt="Icon Arrow" className={`${active ? "rotate-[180deg] transition-transfotm duration-[0.25s]" : "transition-transfotm duration-[0.25s]"} min-w-[15px]`}/>
                </div>
            </div>
            {
                active ? (            
                    <div className="faq-answer z-10 grow rounded-tr-[20px] border-[1px]  border-black bg-skin-light py-[14px] px-[30px] leading-[1.2] tracking-[0.2em] text-[1.125rem] relative hidden lg:block">
                        <p className="z-20 relative">
                            {parse(String(answer))}
                        </p>
                    </div>
                ) : null
            }

        </div>
    );
};

export default FaqItem;