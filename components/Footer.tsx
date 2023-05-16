import Image from "next/image";
import { FC, useState } from "react";

import iconInfo from "../public/icon-info.svg";
import iconWeb from "../public/icon-web.svg";
import iconMail from "../public/icon-mail.svg";
import iconLocation from "../public/icon-location-2.svg";
import iconTel from "../public/icon-tel.svg";
import iconSkype from "../public/icon-skype.svg";
import iconViber from "../public/icon-viber.svg";
import iconTg from "../public/icon-tg.svg";
import iconFb from "../public/icon-fb.svg";
import iconInst from "../public/icon-inst.svg";



const Footer: FC = () => {

    const [date, setDate] = useState<number>(new Date().getFullYear());
    
    return (
        <footer className="bg-skin-dark pt-[85px] pb-[60px]">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div className="flex justify-between items-stretch mb-[30px]">
                    <div className="md:basis-[33.3%] md:pr-[25px]">
                        <div>
                            <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[28px]">Контакти</h3>
                        </div>
                        <div>
                            <ul>
                                <li className="flex justify-start items-center mb-[22px]">
                                    <Image src={iconInfo} alt="Info Icon" className="me-[13px]"></Image>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em] text-black">PrintСервіс. Справжня українська друкарня.</p>
                                </li>
                                <li className="flex justify-start items-center mb-[22px]">
                                    <Image src={iconWeb} alt="Web Icon" className="me-[13px]"></Image>
                                    <a href="#" target="_blank" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">
                                        PrintService.ua
                                    </a>
                                </li>
                                <li className="flex justify-start items-center mb-[22px]">
                                    <Image src={iconMail} alt="Mail Icon" className="me-[13px]"></Image>
                                    <a href="mailto:info@printservice.com.ua" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">
                                        info@printservice.com.ua
                                    </a>
                                </li>
                                <li className="flex justify-start items-center mb-[22px]">
                                    <Image src={iconLocation} alt="Location Icon" className="me-[13px]"></Image>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em] text-black">Київ, вул. Північно-Сирецька 1-3</p>
                                </li>
                                <li className="flex justify-start items-center mb-[22px]">
                                    <Image src={iconTel} alt="Location Icon" className="me-[13px]"></Image>
                                    <a href="tel:+380442053434" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">(+38) 044 205 34 34</a>
                                </li>
                                <li className="flex justify-start items-center">
                                    <a href="" target="_blank" className="me-[20px]">
                                        <Image src={iconSkype} alt="Skype Icon"/>
                                    </a>
                                    <a href="" target="_blank" className="me-[20px]">
                                        <Image src={iconViber} alt="Viber Icon"/>
                                    </a>
                                    <a href="" target="_blank">
                                        <Image src={iconTg} alt="Telegram Icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:basis-[33.3%] md:px-[25px] md:pl-[11.068%]">
                        <div>
                            <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[28px]">Соцмережі</h3>
                        </div>
                        <div>
                            <ul>
                                <li className="flex justify-start items-center mb-[28px]">
                                    <Image src={iconFb} alt="Facebook Icon" className="me-[13px]" />
                                    <a href="" target="_blank" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">
                                        Фейсбук
                                    </a>
                                    
                                </li>
                                <li className="flex justify-start items-center">
                                    <Image src={iconInst} alt="Instagram Icon" className="me-[13px]" />
                                    <a href="" target="_blank" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">
                                        Інстаграмм
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:basis-[33.3%] md:pl-[25px]">
                        <div>
                            <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[28px] text-right">Конфіденсійність</h3>
                        </div>
                        <div>
                            <ul>
                                <li className="text-right mb-[17px]">
                                    <a href="#" target="_blank" className="font-[600] leading-[1.2] tracking-[0.2em] text-black">Terms and Conditions</a>
                                </li>
                                <li className="text-right  mb-[17px]">
                                    <a href="#" target="_blank" className="font-[600] leading-[1.2] tracking-[0.2em] text-black">Accessebility</a>
                                </li>
                                <li className="text-right  mb-[17px]">
                                    <a href="#" target="_blank" className="font-[600] leading-[1.2] tracking-[0.2em] text-black">Cookie Policy</a>
                                </li>
                                <li className="text-right">
                                    <a href="#" target="_blank" className="font-[600] leading-[1.2] tracking-[0.2em] text-black">Privacy Policy</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.125rem]">
                        © <span>{date}</span> PrintService All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;