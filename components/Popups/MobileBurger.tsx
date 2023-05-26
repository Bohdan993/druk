import {FC} from 'react';
import {ICommonContactItem} from '@/strapitypes/common/ContactItem';

const MobileBurger: FC<any> = ({burgerData}) => {
    return (
        <div className="pt-[25px]">
           <ul>
            {burgerData?.map((el: ICommonContactItem, i: number, arr: ICommonContactItem[]) => {
                return (
                    <li className="flex justify-center items-center font-[600] leading-[1.2] tracking-[0.2em] text-black mb-[15px] last:mb-0" key={el?.id}>
                        <a href={el?.link as string}>
                            {el?.name}
                        </a>
                    </li>
                )
            })}
           </ul>
        </div>
    );
};

export default MobileBurger;