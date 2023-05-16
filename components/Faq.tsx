import {FC, Fragment, useState, MouseEvent} from 'react';
import FaqItem from './FaqItem';
import type { FaqItem as FaqItemType} from "../types/faq";

const data: FaqItemType[] = [
    {
        id: 1,
        question: "Який мінімальний тираж?",
        answer: "Від 1-єї одиниці.",
        active: false
    },
    {
        id: 2,
        question: "Який мінімальний тираж?",
        answer: "Від 1-єї одиниці.",
        active: false
    },
    {
        id: 3,
        question: "Який мінімальний тираж?",
        answer: "Від 1-єї одиниці.",
        active: false
    },
    {
        id: 4,
        question: "Який мінімальний тираж?",
        answer: "Від 1-єї одиниці.",
        active: false
    }
]

const Faq: FC = () => {

    const [faqItems, setFaqItems] = useState<FaqItemType[]>(data);

    const handleClick = (id: number, e: MouseEvent<HTMLDivElement>) => {

    }

    return (
        <div className="faq bg-skin-dark  py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[57.6px] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px]">Поширені запитання</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div>
                    {
                        faqItems?.map((el, i) => {
                            return (
                                <Fragment key={el?.id}>
                                    <FaqItem
                                          id={el?.id}
                                          question={el?.question}
                                          answer={el?.answer} 
                                          active={el?.active}
                                          handleClick={(id, e) => handleClick(id, e)}
                                    />
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;