import { useAppSelector } from '@/store';
import { useState, FC } from 'react';
import { Rotor as RotorType } from '@/types/rotors';
import { selectActiveRotorsKeysState, selectRotorsState } from '@/slices/rotors';
import { getPropByString } from '@/utils/getPropByString';
import { selectCalculatorTableState } from '@/slices/calculator-table';
import { FileDimensions } from '@/types/calculator-table';


const CalculatorTable: FC = () => {

    const [show, setShow] = useState(false);
    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
    const calculatorTableState = useAppSelector<FileDimensions>(selectCalculatorTableState);
    const activeRotorsKeysState = useAppSelector<string[]>(selectActiveRotorsKeysState);
    const total = getPropByString(calculatorTableState, activeRotorsKeysState);
    const totalContent = typeof total.res === 'number' ? total.res + (total?.additionalRes || 0) : total.res.toString();

    console.log(activeRotorsKeysState)

    return (
        <div className="flex lg:flex-col lg:h-full">
            <div className="flex flex-col">
                <div className="flex items-center justify-between mb-[15px]">
                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] text-center">Наклад</p>
                    <div>

                    </div>
                </div>
                <div className="flex items-center justify-between mb-[15px]">
                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] text-center">Дата готовності</p>
                    <div>
                        
                    </div>
                </div>
                {rotorsState?.map(rotor => {
                        if(rotor?.attributes?.type !== "multiselect") {
                            return (
                                <div className="flex items-center justify-between mb-[15px]" key={rotor?.id}>
                                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] mr-[8px]">{rotor?.attributes?.title}</p>
                                    <div>
                                        <div className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] rounded-[20px] border-[1px] border-natural-green px-[30px] py-[10px] text-center">{rotor?.attributes?.rotorpiece.find(rp => rp?.active)?.text}</div>
                                    </div>
                                </div> 
                            )
                        }

                })}
            </div>
            <div className="flex flex-col">
                {rotorsState?.map(rotor => {
                        if(rotor?.attributes?.type === "multiselect") {
                            return rotor?.attributes?.rotorpiece?.map(rp => {
                                if(rp?.active) {
                                    return (
                                        <div className="flex items-center justify-between mb-[15px]" key={rp?.id}>
                                            <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] mr-[8px]">{rp?.text}</p>
                                            <div>
                                                <div className="font-[600] leading-[19.2px] tracking-[0.2em] text-[#111111] rounded-[20px] border-[1px] border-natural-green px-[30px] py-[10px] whitespace-nowrap text-center">{(calculatorTableState as any)[rp?.key]} грн.</div>
                                            </div>
                                        </div> 
                                    )
                                }
                            })
                        }
                })}
            </div>
            <div className="mt-auto hidden lg:block">
                {
                    typeof totalContent === 'number' ? (
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-[#111111]">
                            Вартість :<span className="pl-[32px] font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet">
                                {totalContent} грн.
                                </span>
                        </p>
                    ) :
                    (
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-[#111111] text-center">
                            <span className="font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet ">{totalContent}</span>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default CalculatorTable;