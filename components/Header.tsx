import Image from 'next/image';
import {FC} from 'react';
import { IHeader } from './../strapitypes/Header';
import iconBurger from "@/public/icon-burger.svg";
import { useAppDispatch } from '@/store';
import { setShowPopup } from '@/slices/popups';
import { Size, useWindowSize } from "@/utils/useWindowSize";
import { baseUrl } from '@/constants';




type HeaderProps = {
    data: IHeader
}

const Header: FC<HeaderProps> = ({data}) => {
    const dispatch = useAppDispatch();
    const size: Size = useWindowSize();
    const handleClick = () => {

        if(size?.width! < 992 && size?.width! >= 768) {
            dispatch(setShowPopup({key: "showBurgerTabletPopup", state: true}));
        } else if(size?.width! < 768) {
            dispatch(setShowPopup({key: "showBurgerMobilePopup", state: true}));
        }
    }

    return (
        <header id="header" className="header bg-natural-green h-[88px] md:h-[60px] shadow-[4px_4px_10px_rgba(38,38,38,0.2)] relative z-10">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px] flex justify-between items-end md:items-center h-full relative py-[6px]">
                <div className="logo-container  bg-natural-green px-[15px] md:px-[30px] pb-[15px] md:pb-[32px] pt-[45px] md:pt-[22px] rounded-b-[20px] md:max-w-[165px] max-w-[118px] absolute top-0 w-full left-[0px] md:left-auto">
                    <Image src={baseUrl + data?.attributes?.logo?.data?.attributes?.url} width={data?.attributes?.logo?.data?.attributes?.width as number} height={data?.attributes?.logo?.data?.attributes?.height as number} alt="Logo"/>
                </div>
                <div className="md:flex items-center justify-between w-full">
                    <nav className="menu ps-[192px]">
                        <ul className="flex justify-between items-center">
                            {data?.attributes?.menu?.map((el, i, arr) => {
                                const len = arr?.length;
                                return (
                                    <li className={`pe-[20px] lg:pe-[50px] last:pe-0 font-[600] lg:font-bold leading-[19px] hidden md:block tracking-[0.2em] ${len > 2 && (i === (len - 2) || i === (len - 1)) ? "md:hidden lg:block" : ""}`} key={el?.id}>
                                        <a href={el?.link as string}>
                                            {el?.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="socials">
                        <ul className="flex md:justify-center justify-end items-center">
                            {
                                data?.attributes?.social?.map((el) => {
                                    return (
                                        <li key={el?.id} className="lg:mr-[26px] mr-[26px] lg:[&:nth-last-child(2)]:mr-0 hidden md:block">
                                            <a href={el?.link as string}>
                                                <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width as number} height={el?.image?.data?.attributes?.width as number} alt="Icon Social" />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            <li className="lg:hidden">
                                <div className="cursor-pointer" onClick={handleClick}>
                                    <Image src={iconBurger} alt="Icon Burger" className="md:w-[44px] md:h-[44px] w-[32px] h-[32px]" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;