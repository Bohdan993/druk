import {FC, MouseEvent} from 'react';


type FaqItemProps = {
    id: number;
    answer: string;
    question: string;
    active: boolean;
    handleClick: (id: number, e: MouseEvent<HTMLDivElement>) => void;
}

const FaqItem: FC<FaqItemProps> = ({question, answer, id, active, handleClick}) => {
    return (
        <div onClick={(e) => handleClick(id, e)} className={`flex justify-start items-center mb-[25px] last:mb-[0] cursor-pointer`}>
            <div className="bg-natural-green px-[30px] py-[16.5px] font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.125rem] border-r-[1px] border-black">
                {question}
            </div>
            <div>

            </div>
            <div>
                {answer}
            </div>
        </div>
    );
};

export default FaqItem;