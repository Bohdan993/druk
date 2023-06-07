import {FC, Fragment, useState, MouseEvent} from 'react';
import FaqItem from './FaqItem';
import type { Faq as FaqType } from "@/types/faq";
import { IFaqsingle } from '@/strapitypes/Faqsingle';


type FaqProps = {
    data: FaqType[];
    dataSingle: IFaqsingle;
} 

const Faq: FC<FaqProps> = ({data, dataSingle}) => {
    const [faqItems, setFaqItems] = useState<FaqType[]>(data);

    const handleClick = (id: number, e: MouseEvent<HTMLDivElement>) => {
        setFaqItems(prev => {
            const clickedEl: FaqType = prev.find(el => el.id === id)!;
            if(clickedEl.attributes?.active) {
                const newEl = {id: clickedEl?.id, attributes: {...clickedEl.attributes, active: false}};
                const newArr = prev.map(item => item.id === newEl.id ? newEl : item);
                return newArr;
            } else {
                const newEl = {id: clickedEl?.id, attributes: {...clickedEl.attributes, active: true}};
                const newArr = prev.map(item => item.id === newEl.id ? newEl : {id: item?.id, attributes: {...item.attributes, active: false}});
                return  newArr;
            }

        })
    }

    return (
        <div className="faq bg-skin-dark  py-[45px] md:py-[60px] lg:py-[75px]" id={dataSingle?.attributes?.sectionid || "#"}>
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px] px-[10px]">{dataSingle?.attributes?.title}</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div>
                    {
                        faqItems?.map((el, i) => {
                            return (
                                <Fragment key={el?.id}>
                                    <FaqItem
                                          id={el?.id}
                                          question={el?.attributes?.question}
                                          answer={el?.attributes?.answer} 
                                          active={el?.attributes?.active}
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