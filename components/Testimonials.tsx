import {FC} from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import locationIcon from "../public/icon-location.svg";
import googleIcon from "../public/icon-google.svg";
import fbIcon from "../public/icon-fb-2.svg";
import plusIcon from "../public/icon-plus.svg";
import { setShowPopup } from "@/slices/popups";
import { useAppDispatch } from "@/store";
import { Testimonial } from './../types/testimonial';
import { formatDate } from "@/utils/formatDate";
import type {Raiting} from "../types/testimonial";
import { ITestimonialsingle } from '@/strapitypes/Testimonialsingle';


const sliderOptions: Options = {
    type: "loop",
    perPage: 3,
    pagination: false,
    perMove: 1,
    focus: "center",
    flickPower: 150,
    flickMaxPages: 1,
    fixedWidth: "350px",
    gap: 25,
    keyboard: "global",
    height: "393px",
    breakpoints: {
        991: {
            gap: "-160px"
        },
        576: {
            fixedWidth: "300px"
        }
    }
};


type TestimonialsProps = {
    data: Testimonial[];
    dataSingle: ITestimonialsingle;
}

const raiting: {[key in Raiting]: number} = {
    "Один": 1,
    "Два": 2,
    "Три": 3,
    "Чотири": 4,
    "П'ять": 5,
}

const Testimonials: FC<TestimonialsProps> = ({data, dataSingle}) => {

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(setShowPopup({key: "showTestimonialsPopup", state: true}));
    }

    return (
        <div className="testimonials bg-light-green  py-[45px] md:py-[60px] lg:py-[75px]" id={dataSingle?.attributes?.sectionid || "#"}>
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] px-[10px]">{dataSingle?.attributes?.title}</h2>
            <div className="container m-auto px-[0] sm:px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div>
                    <Splide hasTrack={false} className="testimonials-carousel" aria-label="Books gallery" options={sliderOptions}>
                        <SplideTrack>
                            {
                                data?.map(el => {
                                    return (
                                        <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] " key={el?.id}>
                                            <div className="p-[35px] md:p-[37px] h-full flex flex-col">
                                                <div className="flex justify-between items-center mb-[42px]">
                                                    <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">{el?.attributes?.name}</h3>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        activeColor={"#9882AC"}
                                                        color={"#9882AC"}
                                                        edit={false}
                                                        emptyIcon={<>☆</>}
                                                        filledIcon={<>★</>}
                                                        value={raiting[el?.attributes?.raiting]} />
                                                </div>
                                                <div className="testimonials-text max-w-[208px] mx-auto mb-auto pb-[10px] w-full max-h-[198px]">
                                                    <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem] h-full overflow-hidden text-ellipsis">
                                                        {el?.attributes?.review}
                                                    </p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex justify-between items-center">
                                                        <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                                        <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                                            {el?.attributes?.town}
                                                        </p>
                                                    </div>
            
                                                    <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                                        {formatDate(el?.attributes?.createdAt)}
                                                    </span>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    )
                                })
                            }
                        </SplideTrack>
                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">  
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="27"
                                    fill="none"
                                    viewBox="0 0 15 27"
                                    >
                                    <path
                                        d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                                    ></path>
                                </svg>
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="27"
                                    fill="none"
                                    viewBox="0 0 15 27"
                                    >
                                    <path
                                        d="M2.972 1.015L14.62 12.54c.138.137.236.285.293.446.058.16.087.331.087.514s-.029.354-.087.514c-.057.16-.155.31-.293.446L2.972 26.02c-.322.32-.725.48-1.21.48-.483 0-.898-.172-1.244-.515-.345-.343-.518-.743-.518-1.2 0-.457.173-.858.518-1.2L10.68 13.5.518 3.416a1.601 1.601 0 01-.483-1.183c0-.47.172-.875.518-1.218C.899.672 1.302.5 1.763.5c.46 0 .864.172 1.21.515z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </Splide>
                </div>
                <div>
                    <div className="flex justify-center lg:justify-between items-center lg:px-[50px] flex-wrap md:flex-nowrap">
                        <div className="testimonials-btn basis-[100%] md:basis-[auto] lg:mx-[10px] md:mx-[6.5px] md:block flex justify-center mb-[13px] md:mb-0 md:ml-0">
                            <button onClick={handleClick} className="flex justify-between items-center px-[30px] py-[10px] bg-skin-light rounded-[20px] ">
                                <p className="font-[600] text-[1.125rem] text-black leading-[1.2] tracking-[0.1em] mr-[25px] transition-color duration-[0.25s] ease-in text-center">Залишити відгук</p>
                                <span className="w-[50px] min-w-[50px] h-[50px] flex bg-natural-green justify-center items-center rounded-[15px]">
                                    <Image src={plusIcon} alt="Plus Icon"/>
                                </span>
                            </button>
                        </div>
                        <div className="testimonials-btn basis-[40%] md:basis-[auto] flex justify-end lg:mx-[10px] md:mx-[6.5px] md:block mr-[19px]">
                            <a href="#" className="flex justify-between items-center px-[30px] py-[10px] bg-skin-light rounded-[20px]  ">
                                <p className="font-[600] text-[1.125rem] text-black leading-[1.2] tracking-[0.1em] mr-[25px] transition-color duration-[0.25s] ease-in text-center hidden lg:block">Відгуки в Facebook</p>
                                <span>
                                    <Image src={fbIcon} alt="Plus Icon" className="rounded-[15px] min-w-[50px]"/>
                                </span>
                            </a>
                        </div>
                        <div className="testimonials-btn basis-[40%] md:basis-[auto] flex justify-start lg:mx-[10px] md:mx-[6.5px] md:block ml-[19px] md:mr-0">
                            <a href="#" className="flex justify-between items-center px-[30px] py-[10px] bg-skin-light rounded-[20px] ">
                                <p className="font-[600] text-[1.125rem] text-black leading-[1.2] tracking-[0.1em] mr-[25px] transition-color duration-[0.25s] ease-in text-center hidden lg:block">Відгуки в Google</p>
                                <span >
                                    <Image src={googleIcon} alt="Plus Icon" className="min-w-[50px]" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;