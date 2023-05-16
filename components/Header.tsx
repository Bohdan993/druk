import Image from 'next/image';
import React from 'react';

import logo from '../public/logo.png';

const menu = [
    {name: "Конструктор", id: 1},
    {name: "Галерея", id: 2},
    {name: "Питання", id: 3},
    {name: "Відгуки", id: 4},
    {name: "Про нас", id: 5}
]

const Header = () => {
    return (
        <header className="header bg-natural-green h-[60px] shadow-[4px_4px_10px_rgba(38,38,38,0.2)]">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px] flex justify-between items-center h-full relative">
                <div className="logo-container bg-natural-green px-[30px] pb-[32px] pt-[22px] rounded-b-[20px] md:max-w-[165px] max-w-[118px] absolute top-0 w-full">
                    <Image src={logo} alt="Logo"/>
                </div>
                <div className="md:flex items-center justify-between hidden">
                    <nav className="menu ps-[192px]">
                        <ul className="flex justify-between items-center">
                            {menu?.map(el => {
                                return (
                                    <li className="pe-[50px] last:pe-0 font-bold leading-[19px] tracking-[0.2em]" key={el?.id}>
                                        <a href="#">
                                        {el?.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="socials">

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;