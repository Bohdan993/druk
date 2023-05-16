import Image from 'next/image';
import type { FC } from 'react';
import parse from 'html-react-parser';


type AboutProps = {
    data: any
}

const baseUrl: string = "http://localhost:1337";

const About: FC<AboutProps> = ({data}) => {
    return (
        <div className="about bg-skin-light py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px]">{data?.attributes?.title}</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <article className="flex justify-between items-start mb-[50px] flex-wrap lg:flex-nowrap">
                    <div className="basis-[100%] lg:basis-[44.14%] lg:pr-[29px]">
                        <h3 className="font-bold text-[1.5rem] leading-[28.8px] tracking-[0.2em] text-[#111111] max-w-[330px] mb-[50px]">
                            {data?.attributes?.title2}
                        </h3>
                        <blockquote className="font-[600] leading-[19.2px] tracking-[0.1em] text-black max-w-[335px] mb-[25px] border-l-[1px] border-l-natural-green pl-[22px]">
                            {parse(data?.attributes?.slogan)}
                        </blockquote>
                        <p className="leading-[19.2px] tracking-[0.09em] font-normal">
                            {data?.attributes?.text}
                        </p>
                    </div>
                    <div className="basis-[100%] lg:basis-[55.86%] lg:pl-[29px]">
                        <Image src={baseUrl + data?.attributes?.image?.data?.attributes?.url} width={data?.attributes?.image?.data?.attributes?.width} height={data?.attributes?.image?.data?.attributes?.height} alt="Office" className="w-[100%]"/>
                    </div>
                </article>
                <div className="flex justify-between items-center mx-[-16.5px] mb-[65px]">
                    {
                        data?.attributes?.imagetextarea?.map((el: any) => {
                            return (
                                <figure className="flex flex-col items-center basis-[33.3%] px-[16.5px]" key={el?.id}>
                                    <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Icon" className="mb-[18px]"></Image>
                                    <figcaption className="text-center leading-[1.2] tracking-[0.1em] max-w-[224px]">{el?.text}</figcaption>
                                </figure>
                            )
                        })
                    }

                </div>
                <div>
                    <h3 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-[#111111] text-[1.5rem] mb-[55px]">{data?.attributes?.imagetextarea2title}</h3>
                    <ul className="flex justify-center items-start mx-[-31px] flex-wrap">
                    {
                        data?.attributes?.imagetextarea2?.map((el: any) => {
                            return (
                                <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]" key={el?.id}>
                                    <Image src={baseUrl + el?.image?.data?.attributes?.url} width={el?.image?.data?.attributes?.width} height={el?.image?.data?.attributes?.height} alt="Icon" className="mb-[35px]"></Image>
                                    <p className="text-center leading-[1.2] tracking-[0.1em]">{el?.text}</p>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;