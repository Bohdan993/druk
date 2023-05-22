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
      >
    </InputMask>
  );
}


const CalculatorTable: FC<QuantityInputProps> = ({quantity, handleQuantityChange}) => {

    const [date, setDate] = useState(formatDate(new Date().toString(), false));
    // const [show, setShow] = useState(false);
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
        <div className="flex flex-col md:flex-row lg:flex-col lg:h-full max-w-[270px] mx-auto md:mx-[unset] max-h-[440px] md:max-h-[unset] md:max-w-[unset] calculator-table">
            <div className="flex flex-col">
                <div className="flex items-center justify-start mb-[5px] lg:mb-[15px]">
                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] basis-[50%] text-black-2 mr-[8px]">Наклад</p>
                    <div className="basis-[50%]">
                        <QuantityInput
                            quantity={quantity}
                            handleQuantityChange={handleQuantityChange}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-start mb-[5px] lg:mb-[15px]">
                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 basis-[50%] mr-[8px]">Дата готовності</p>
                    <div className="basis-[50%]">
                        <DateInput 
                            className="font-[600] text-center leading-[1.2] py-[10px] px-[15px] text-black bg-skin-light border-fiolet border-[1px] rounded-[20px] outline-none w-full max-w-[173px]"
                            value={date}
                            onChange={handleChange}/>
                    </div>
                </div>
                {rotorsState?.map(rotor => {
                        if(rotor?.attributes?.type !== "multiselect") {
                            return (
                                <div className="flex items-center justify-start mb-[5px] lg:mb-[15px]" key={rotor?.id}>
                                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 basis-[50%] mr-[8px]">{rotor?.attributes?.title}</p>
                                    <div className="basis-[50%]">
                                        <div className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 rounded-[20px] border-[1px] border-natural-green px-[30px] py-[10px] text-center">{rotor?.attributes?.rotorpiece.find(rp => rp?.active)?.text}</div>
                                    </div>
                                </div> 
                            )
                        }

                })}

            </div>
            
            <div className="flex flex-col">
                <div className="flex items-center justify-start mb-[5px] lg:mb-[15px]">
                    <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 mr-[8px] basis-[50%]">Вартість 1 од.</p>
                    <div className="basis-[50%]">
                        <div className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 rounded-[20px] border-[1px] border-natural-green px-[30px] py-[10px] text-center">{subTotalContent} грн.</div>
                    </div>
                </div> 
                {rotorsState?.map(rotor => {
                        if(rotor?.attributes?.type === "multiselect") {
                            return rotor?.attributes?.rotorpiece?.map(rp => {
                                if(rp?.active) {
                                    return (
                                        <div className="flex items-center justify-start mb-[5px] lg:mb-[15px]" key={rp?.id}>
                                            <p className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2 mr-[8px] basis-[50%]">{rp?.text}</p>
                                            <div className="basis-[50%]">
                                                <div className="font-[600] leading-[19.2px] tracking-[0.2em] text-black-2  rounded-[20px] border-[1px] border-natural-green px-[30px] py-[10px] whitespace-nowrap text-center">{(calculatorTableState as any)[rp?.key]} грн.</div>
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
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2">
                            Вартість :<span className="pl-[32px] font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet">
                                {totalContent} грн.
                                </span>
                        </p>
                    ) :
                    (
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2 text-center">
                            <span className="font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet ">{totalContent}</span>
                        </p>
                    )
                }
            </div>
            </div>
            <div className="mt-auto hidden lg:block">
                {
                    typeof totalContent === 'number' ? (
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2">
                            Вартість :<span className="pl-[32px] font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet">
                                {totalContent} грн.
                                </span>
                        </p>
                    ) :
                    (
                        <p className="font-bold leading-[1.2] tracking-[0.2em] text-[1.5rem] text-black-2 text-center">
                            <span className="font-bold leading-[1.2] tracking-[0.2em] text-[2rem] text-fiolet ">{totalContent}</span>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default CalculatorTable;