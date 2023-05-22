import Image from "next/image";
import { FC } from "react";
import Toogle, {ToogleContentProps, ToogleHeadProps} from "./Helpers/Toogle";
import { baseUrl } from '@/constants';


type FooterProps = {
    readonly data: any
}

type ContactItem = {
    readonly id: number;
    readonly link?: string;
    readonly name: string;
    readonly image?: any
}

type ContactSocial = {
    readonly id: number;
    readonly link: string;
    readonly name?: string;
    readonly image: any
}

const Footer: FC<FooterProps> = ({data}) => {
    const content = data?.attributes;
    return (
        <footer className="bg-skin-dark pt-[65px] pb-[60px]">
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div className="flex justify-between items-stretch mb-[30px] flex-col md:flex-row">
                    <div className="md:basis-[33.3%] md:pr-[25px]">
                        <Toogle
                            head={({onClick, show}: ToogleHeadProps) => {
                                return (
                                    <div onClick={onClick} className="border-b-natural-green border-b-[1px] md:border-none cursor-pointer md:cursor-auto flex justify-between items-center md:block px-[10px] md:px-0 mb-[10px] md:mb-0">
                                            <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[10px] md:mb-[28px]">{content?.contact?.title}</h3>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="27"
                                                fill="none"
                                                viewBox="0 0 15 27"
                                                className={`${show ? "rotate-[270deg] transition-transfotm duration-[0.25s] fill-fiolet" : "rotate-[90deg] transition-transfotm duration-[0.25s] fill-black"} min-w-[15px] md:hidden mb-[10px]`}
                                                >
                                                <path
                                                    d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                                                ></path>
                                            </svg>
                                    </div>
                                )
                            }}

                            content={({show}: ToogleContentProps)=>{
                                return (
                                    <div>
                                        <ul className={`${show ? "block" : "hidden"} md:block mb-[15px] md:mb-0 mt-[30px] md:mt-0`}>
                                            {
                                                content?.contact?.contactitem?.map((el: ContactItem) => {
                                                    return (
                                                        <li className="flex justify-start items-center mb-[22px]" key={el?.id}>
                                                            <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Icon" className="me-[13px]"></Image>
                                                            {
                                                                el?.link ? (
                                                                    <a href={`${el?.link}`} className="font-[600] leading-[1.2] tracking-[0.1em] text-black">{el?.name}</a>
                                                                ) : (
                                                                    <p className="font-[600] leading-[1.2] tracking-[0.1em] text-black">{el?.name}</p>
                                                                )
                                                            }
                                                            
                                                        </li>
                                                    )
                                                })
                                            }
                                            <li className="flex justify-start items-center">
                                                {
                                                    content?.contact?.contactsocial?.map((el: ContactSocial) => {
                                                        return (
                                                            <a href={`${el?.link}`} target="_blank" rel="noopener noreferrer" className="me-[20px]" key={el?.id}>
                                                                <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Social Icon"/>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }}
                        />
                    </div>
                    <div className="md:basis-[33.3%] md:px-[25px] md:pl-[11.068%]">
                        <Toogle 
                            head={({onClick, show}: ToogleHeadProps) => {
                                return (
                                    <div onClick={onClick} className="border-b-natural-green border-b-[1px] md:border-none cursor-pointer md:cursor-auto flex justify-between items-center md:block px-[10px] md:px-0 mb-[10px] md:mb-0">
                                        <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[10px] md:mb-[28px]">{content?.social?.title}</h3>
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="27"
                                                fill="none"
                                                viewBox="0 0 15 27"
                                                className={`${show ? "rotate-[270deg] transition-transfotm duration-[0.25s] fill-fiolet" : "rotate-[90deg] transition-transfotm duration-[0.25s] fill-black"} min-w-[15px] md:hidden mb-[10px]`}
                                                >
                                                <path
                                                    d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                                                ></path>
                                            </svg>
                                    </div>
                                )
                            }}

                            content={({show}: ToogleContentProps) => {
                                return (
                                    <div>
                                        <ul className={`${show ? "block" : "hidden"} md:block mb-[15px] md:mb-0 mt-[30px] md:mt-0`}>
                                            {
                                                content?.social?.contactsocial?.map((el: ContactSocial) => {
                                                    return (
                                                        <li className="flex justify-start items-center mb-[28px] last:mb-0" key={el?.id}>
                                                            <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Social Icon" className="me-[13px]" />
                                                            <a href={`${el?.link}`} target="_blank" rel="noopener noreferrer" className="font-[600] leading-[1.2] tracking-[0.1em] text-black">
                                                                {el?.name}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }}
                        />


                    </div>
                    <div className="md:basis-[33.3%] md:pl-[25px]">
                        <Toogle 
                            head={({onClick, show}: ToogleHeadProps) => {
                                return (
                                    <div onClick={onClick} className="border-b-natural-green border-b-[1px] md:border-none cursor-pointer md:cursor-auto flex justify-between items-center md:block px-[10px] md:px-0 mb-[10px] md:mb-0">
                                        <h3 className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1.5rem] mb-[10px] md:mb-[28px] md:text-right">{content?.privacy?.title}</h3>
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="27"
                                                fill="none"
                                                viewBox="0 0 15 27"
                                                className={`${show ? "rotate-[270deg] transition-transfotm duration-[0.25s] fill-fiolet" : "rotate-[90deg] transition-transfotm duration-[0.25s] fill-black"} min-w-[15px] md:hidden mb-[10px]`}
                                                >
                                                <path
                                                    d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                                                ></path>
                                            </svg>
                                    </div>
                                )
                            }}
                            content={({show}: ToogleContentProps) => {
                                return (
                                    <div className="flex justify-between items-center md:block">
                                        <ul className={`${show ? "block" : "hidden"} md:block md:mb-[32px] mt-[30px] md:mt-0`}>
                                            {
                                                content?.privacy?.contactitem?.map((el: ContactItem) => {
                                                    return (
                                                        <li className="md:text-right mb-[17px]" key={el?.id}>
                                                            <a href={`${el?.link}`} target="_blank" rel="noopener noreferrer" className="font-[600] leading-[1.2] tracking-[0.2em] text-black">{el?.name}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className="hidden md:flex ml-auto w-[117px] p-[20px] h-[117px] rounded-[50%]  items-center justify-center bg-skin-dark shadow-[2.83784px_2.83784px_8.51351px_rgba(0,0,0,0.25),-2.83784px_-2.83784px_8.51351px_#FBF5E9]">
                                            <Image src={baseUrl + content?.logo?.data?.attributes?.url} width={content?.logo?.data?.attributes?.width} height={content?.logo?.data?.attributes?.height} alt="Logo"/>
                                        </div>
                                    </div>
                                )
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-bold leading-[1.2] tracking-[0.2em] text-black text-[1rem] md:text-[1.125rem] mr-[10px] md:mr-0">
                        {content?.copyright}
                    </p>
                    <div className="md:hidden ml-auto min-w-[58.5px] w-[58.5px] p-[10px] h-[58.5px] rounded-[50%] flex items-center justify-center bg-skin-dark shadow-[2.83784px_2.83784px_8.51351px_rgba(0,0,0,0.25),-2.83784px_-2.83784px_8.51351px_#FBF5E9]">
                        <Image src={baseUrl + content?.logo?.data?.attributes?.url} width={content?.logo?.data?.attributes?.width} height={content?.logo?.data?.attributes?.height} alt="Logo"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;