import {FC} from 'react';
import Image from 'next/image';
import {ICommonContactItem} from '@/strapitypes/common/ContactItem';
import { baseUrl } from '@/constants';

const MobileBurger: FC<any> = ({burgerData, onClose}) => {
    return (
        <div className="pt-[25px]">
           <ul className="mb-[30px]">
            {burgerData?.menu?.map((el: ICommonContactItem) => {
                return (
                    <li className="flex justify-center items-center font-[600] leading-[1.2] tracking-[0.2em] text-black mb-[15px] last:mb-0" key={el?.id} onClick={onClose}>
                        <a href={el?.link as string}>
                            {el?.name}
                        </a>
                    </li>
                )
            })}
           </ul>
            <div className="flex items-center mb-[30px]">
                <Image src={baseUrl + burgerData?.phone?.image?.data?.attributes?.url} width={burgerData?.phone?.image?.data?.attributes?.width as number} height={burgerData?.phone?.image?.data?.attributes?.width as number} alt="Icon Phone" className="mr-[18px]"/>
                <a href={burgerData?.phone?.link} rel="noopener noreferrer" className="font-roboto font-normal text-[1rem] text-black leading-[1.3]">{burgerData?.phone?.name}</a>
            </div>
           <ul className="flex justify-center items-center">
           {burgerData?.social?.map((el: ICommonContactItem) => {
                return (
                    <li key={el?.id} className="mr-[26px] last:mr-0">
                        <a href={el?.link as string}>
                            <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width as number} height={el?.image?.data?.attributes?.width as number} alt="Icon Social" />
                        </a>
                    </li>
                )
            })}
           </ul>
        </div>
    );
};

export default MobileBurger;