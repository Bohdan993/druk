import Image from 'next/image';
import type { FC } from 'react';
import parse from 'html-react-parser';
import Toogle, {ToogleContentProps, ToogleHeadProps} from "./Helpers/Toogle";
import { IAbout } from './../strapitypes/About';
import { baseUrl } from '@/constants';


type AboutProps = {
    data: IAbout
}


const About: FC<AboutProps> = ({data}) => {
    return (
        <div className="about bg-skin-light py-[45px] md:py-[60px] lg:py-[75px]" id={data?.attributes?.sectionid || "#"}>
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px] px-[10px]">{data?.attributes?.title}</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <article className="flex justify-between items-start mb-[45px] flex-wrap lg:flex-nowrap">
                    <div className="basis-[100%] lg:basis-[44.14%] lg:pr-[29px]">
                        <h3 className="font-bold text-[1.5rem] leading-[28.8px] tracking-[0.2em] text-black-2 max-w-[330px] mb-[22px] lg:mb-[50px]">
                            {data?.attributes?.title2}
                        </h3>
                        <blockquote className="font-[600] leading-[19.2px] tracking-[0.1em] text-black max-w-[335px] mb-[25px] border-l-[1px] border-l-natural-green pl-[22px]">
                            {parse(data?.attributes?.slogan as string)}
                        </blockquote>
                        <p className="leading-[19.2px] tracking-[0.09em] font-normal mb-[8px]">
                            {data?.attributes?.text}
                        </p>
                    </div>
                    <div className="basis-[100%] lg:basis-[55.86%] lg:pl-[29px]">
                        <Image priority src={baseUrl + data?.attributes?.image?.data?.attributes?.url} width={data?.attributes?.image?.data?.attributes?.width as number} height={data?.attributes?.image?.data?.attributes?.height as number} alt="Office" className="w-[100%]"/>
                    </div>
                </article>
                <div>
                    <Toogle
                        head={({onClick, show}: ToogleHeadProps) =>{
                            return (
                                <div onClick={onClick} className={`${show ? "bg-fiolet" : "bg-natural-green"} flex justify-between items-center md:block md:mb-[55px] mb-[50px]  md:bg-[unset] rounded-[20px] md:rounded-0 px-[40px] md:px-0 py-[2px] md:py-0 transition-background duration-[0.25s] ease-in md:pointer-events-none`}>
                                    <h3 className={`${show ? "text-white" : "text-black-2"} md:text-center font-bold leading-[1.2] tracking-[0.2em] md:text-black-2 text-[1.5rem] transition-color duration-[0.25s] ease-in mr-4 md:mr-0`}>{data?.attributes?.imagetextareatitle}</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="27"
                                        fill="none"
                                        viewBox="0 0 15 27"
                                        className={`${show ? "rotate-[270deg] transition-transfotm duration-[0.25s] fill-white" : "rotate-[90deg] transition-transfotm duration-[0.25s] fill-black"} min-w-[15px] md:hidden`}
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
                                <div className={`${show? "flex" : "hidden"} md:flex md:flex-row flex-col items-center md:items-start justify-between md:mx-[-16.5px] mb-[65px]`}>
                                    {
                                        data?.attributes?.imagetextarea?.map((el: any) => {
                                            return (
                                                <figure className="flex flex-col items-center md:basis-[33.3%] md:px-[16.5px] mb-[20px] md:mb-0 last:mb-0" key={el?.id}>
                                                    <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Icon" className="mb-[18px]"></Image>
                                                    <figcaption className="text-center leading-[1.2] tracking-[0.1em] max-w-[224px]">{el?.text}</figcaption>
                                                </figure>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }}
                    />


                </div>
                <div className="overflow-x-hidden md:overflow-x-[unset] lg:mb-[55px]">
                    <Toogle
                        head={({onClick, show}: ToogleHeadProps) => {
                            return (
                                <div onClick={onClick} className={`${show ? "bg-fiolet" : "bg-natural-green"} flex justify-between items-center md:block md:mb-[55px] mb-[50px] md:bg-[unset] rounded-[20px] md:rounded-0 px-[40px] md:px-0 py-[2px] md:py-0 transition-background duration-[0.25s] ease-in md:pointer-events-none`}>
                                    <h3 className={`${show ? "text-white" : "text-black-2"} md:text-center font-bold leading-[1.2] tracking-[0.2em] md:text-black-2 text-[1.5rem] transition-color duration-[0.25s] ease-in mr-4 md:mr-0`}>{data?.attributes?.imagetextarea2title}</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="27"
                                        fill="none"
                                        viewBox="0 0 15 27"
                                        className={`${show ? "rotate-[270deg] transition-transfotm duration-[0.25s] fill-white" : "rotate-[90deg] transition-transfotm duration-[0.25s] fill-black"} min-w-[15px] md:hidden`}
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
                                <ul className={`${show? "flex" : "hidden"} md:flex justify-center items-start mx-[-25px] md:mx-[-31px] flex-wrap`}>
                                {
                                    data?.attributes?.imagetextarea2?.map((el) => {
                                        return (
                                            <li className="flex flex-col items-center px-[25px] md:px-[31px] mb-[55px] lg:mb-0 basis-[50%] md:basis-[33.3%] lg:basis-[20%] [&:nth-child(3n)]:basis-[100%] md:[&:nth-child(3n)]:basis-[33%] lg:[&:nth-child(3n)]:basis-[20%]" key={el?.id}>
                                                <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width as number} height={el?.image?.data?.attributes?.height as number} alt="Icon" className="mb-[35px]"></Image>
                                                <p className="text-center leading-[1.2] tracking-[0.1em] max-w-[175px] md:max-w-[unset]">{el?.text}</p>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            )
                        }}
                    />
                </div>
                <div>
                    <p className="text-black font-bold text-[1.125rem] leading-[1.2] tracking-[0.2em] lg:max-w-[530px] text-center lg:text-right lg:ml-auto">
                        {data?.attributes?.text2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;