import { useAppSelector } from '@/store';
import { useState, FC, ChangeEvent } from 'react';
import { Rotor as RotorType } from '@/types/rotors';
import { selectActiveRotorsKeysState, selectRotorsState } from '@/slices/rotors';
import { getPropByString } from '@/utils/getPropByString';
import { selectCalculatorTableState } from '@/slices/calculator-table';
import { FileDimensions } from '@/types/calculator-table';
import { formatDate } from '@/utils/formatDate';
// @ts-ignore
import InputMask from 'react-input-mask';
import { QuantityInput,  QuantityInputProps} from './QuantityInput';


type DateInputProps = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}


function DateInput(props: DateInputProps) {

    const beforeMaskedValueChange = (newState: {selection: object, value: string}) => {
        const { value } = newState;
        const selection = newState.selection;

        const values = value.split('.').map((el: string, i: number)=> {
            if(i === 0) {
                if(parseInt(el) > 31) {
                    return 31
                } else {
                    return el;
                }
            }

            if(i === 1) {
                if(parseInt(el) > 12) {
                    return 12;
                } else {
                    return el;
                }
            }
        }).join('.');

        return {
            value: values,
            selection
          };
    }

  return (
    <InputMask 
        mask='99.99' 
        value={props.value} 
        onChange={props.onChange}
        className={props.className}
        beforeMaskedValueChange={beforeMaskedValueChange}
        size={6}
      >
    </InputMask>
  );
}


const CalculatorTable: FC<QuantityInputProps> = ({quantity, handleQuantityChange}) => {

    const [date, setDate] = useState(formatDate(new Date().toString(), false));
    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
    const calculatorTableState = useAppSelector<FileDimensions>(selectCalculatorTableState);
    const activeRotorsKeysState = useAppSelector<string[]>(selectActiveRotorsKeysState);

    const total = getPropByString(calculatorTableState, activeRotorsKeysState, parseInt(quantity || "1"));
    const totalContent = typeof total.res === 'number' ? ((total.res * total?.coef! * parseInt(quantity || "1")) + ((total?.additionalRes) || 0)): total.res.toString();
    const subTotalContent = typeof total.res === 'number' ? (total.res * total?.coef!) : "-";


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setDate(inputValue);
    }

    return (
        <div className="md:px-[50px] md:py-[12px] lg:px-0 lg:py-0 p-[13px] max-w-[270px] md:max-w-[unset] mx-auto md:mx-[unset] lg:h-full calculator-table-container w-full">
            <div className="flex flex-col md:flex-row lg:flex-col  md:max-h-[unset] md:max-w-[unset] calculator-table max-h-[440px] relative w-full">
                <div className="flex flex-col md:pr-[18px] lg:pr-0 basis-[50%] lg:basis-[unset]">
                    <div className="flex items-center justify-between lg:justify-start mb-[10px] lg:mb-[15px]">
                        <p className="font-[600] leading-[1.2] tracking-[0.2em] lg:basis-[50%] text-black-2 mr-[8px] text-[0.876rem] md:text-[1rem]">Наклад</p>
                        <div className="lg:basis-[50%]">
                            <QuantityInput
                                quantity={quantity}
                                handleQuantityChange={handleQuantityChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between lg:justify-start mb-[10px] lg:mb-[15px]">
                        <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black-2 lg:basis-[50%] mr-[8px] text-[0.876rem] md:text-[1rem]">Дата готовності</p>
                        <div className="lg:basis-[50%]">
                            <DateInput 
                                className="font-[600] text-[0.875rem]  md:text-[1rem] w-auto text-center leading-[1.2] tracking-[0.2em] px-[16px] py-[13.5px] lg:px-[30px] lg:py-[10px] md:px-[20px] md:py-[15px] text-black bg-transparent border-fiolet border-[1px] rounded-[20px] outline-none max-w-[173px] bg-skin-light"
                                value={date}
                                onChange={handleChange}/>
                        </div>
                    </div>
                    {rotorsState?.map(rotor => {
                            if(rotor?.attributes?.type !== "multiselect") {
                                return (
                                    <div className="flex items-center lg:justify-start justify-between mb-[10px] lg:mb-[15px] md:last:mb-0 lg:last:mb-[15px]" key={rotor?.id}>
                                        <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black-2 lg:basis-[50%] mr-[8px] text-[0.876rem] md:text-[1rem]">{rotor?.attributes?.title}</p>
                                        <div className="lg:basis-[50%] lg:flex">
                                            <div className="font-[600] text-[0.875rem]  md:text-[1rem] leading-[1.2] tracking-[0.2em] text-black-2 rounded-[20px] border-[1px] border-natural-green px-[16px] py-[13.5px] lg:px-[30px] lg:py-[10px] md:px-[20px] md:py-[15px] text-center inline-flex whitespace-nowrap">{rotor?.attributes?.rotorpiece.find(rp => rp?.active)?.text}</div>
                                        </div>
                                    </div> 
                                )
                            }

                    })}

                </div>
                
                <div className="flex flex-col md:pl-[18px] lg:pl-0 basis-[50%] lg:basis-[unset]">
                    <div className="flex items-center lg:justify-start justify-between mb-[10px] lg:mb-[15px]">
                        <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black-2 mr-[8px] lg:basis-[50%] text-[0.876rem] md:text-[1rem]">Вартість 1 од.</p>
                        <div className="lg:basis-[50%]">
                            <div className="font-[600] text-[0.875rem]  md:text-[1rem] leading-[1.2] tracking-[0.2em] text-black-2 rounded-[20px] border-[1px] border-natural-green px-[16px] py-[13.5px] lg:px-[30px] lg:py-[10px] md:px-[20px] md:py-[15px] text-center inline-flex whitespace-nowrap">{subTotalContent} грн.</div>
                        </div>
                    </div> 
                    {rotorsState?.map(rotor => {
                            if(rotor?.attributes?.type === "multiselect") {
                                return rotor?.attributes?.rotorpiece?.map(rp => {
                                    if(rp?.active) {
                                        return (
                                            <div className="flex items-center lg:justify-start justify-between mb-[10px] lg:mb-[15px]" key={rp?.id}>
                                                <p className="font-[600] leading-[1.2] tracking-[0.2em] text-black-2 mr-[8px] lg:basis-[50%] text-[0.876rem] md:text-[1rem]">{rp?.text}</p>
                                                <div className="lg:basis-[50%]">
                                                    <div className="font-[600] text-[0.875rem]  md:text-[1rem] leading-[1.2] tracking-[0.2em] text-black-2  rounded-[20px] border-[1px] border-natural-green px-[16px] py-[13.5px] lg:px-[30px] lg:py-[10px] md:px-[20px] md:py-[15px] whitespace-nowrap text-center inline-flex">{(calculatorTableState as any)[rp?.key]} грн.</div>
                                                </div>
                                            </div> 
                                        )
                                    }
                                })
                            }
                    })}
                    <div className="mt-auto block lg:hidden">
                    {
                        typeof totalContent === 'number' ? (
                            <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.25rem] text-black-2 flex justify-between items-center whitespace-nowrap">
                                Вартість: <span className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-natural-green lg:text-fiolet ml-[8px] text-center whitespace-nowrap">
                                    {totalContent} грн.
                                </span>

                            </p>
                        ) :
                        (
                            <p className="font-bold leading-[1.2] tracking-[0.2em] text-black-2 text-center text-[1.25rem]">
                                <span className="font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-natural-green lg:text-fiolet ">{totalContent}</span>
                            </p>
                        )
                    }
                </div>
                </div>
                <div className="mt-auto hidden lg:block">
                    {
                        typeof totalContent === 'number' ? (
                            <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2 whitespace-nowrap">
                                Вартість :<span className="pl-[32px] font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-natural-green lg:text-fiolet">
                                    {totalContent} грн.
                                    </span>
                            </p>
                        ) :
                        (
                            <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2 text-center">
                                <span className="font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-natural-green lg:text-fiolet ">{totalContent}</span>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CalculatorTable;