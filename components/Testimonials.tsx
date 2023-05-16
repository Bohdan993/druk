import {FC, ReactElement} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import locationIcon from "../public/icon-location.svg";


type IconProps = {
    icon: string;
}

const sliderOptions: Options = {
    type: "loop",
    perPage: 3,
    pagination: false,
    perMove: 1,
    focus: "center",
    flickPower: 150,
    flickMaxPages: 1,
    // drag: false,
    gap: 25,
    keyboard: "global",
    height: "393px",
    breakpoints: {
        992: {
            gap: "-175px"
        }
    }
};


const Icon: FC<IconProps> = ({icon}) => {
    return (
        <>
            {icon}
        </>
    )
}


const Testimonials: FC = () => {
    return (
        <div className="testimonials bg-light-green  py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[57.6px] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[25px]">Відгуки клієнтів</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <Splide onMove={(splide, index, prev, dest) => {console.log(splide, index, prev, dest)}} className="testimonials-carousel" aria-label="Books gallery" options={sliderOptions}>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр1</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={<Icon icon="☆"/> as ReactElement}
                                    filledIcon={<Icon icon="★"/> as ReactElement}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр2</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={"☆"}
                                    filledIcon={"★"}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр3</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={"☆"}
                                    filledIcon={"★"}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр4</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={"☆"}
                                    filledIcon={"★"}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр5</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={"☆"}
                                    filledIcon={"★"}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className="relative cursor-pointer bg-skin-light rounded-[20px]  shadow-[1px_1px_4px_rgba(38,38,38,0.2)] ">
                        <div className="p-[37px] h-full flex flex-col">
                            <div className="flex justify-between items-center mb-[42px]">
                                <h3 className="font-[600] text-[1.5rem] leading-[1.2] tracking-[0.1em]">Олександр6</h3>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor={"#9882AC"}
                                    color={"#9882AC"}
                                    edit={false}
                                    emptyIcon={"☆"}
                                    filledIcon={"★"}
                                    value={4} />
                            </div>
                            <div className="testimonials-text max-w-[208px] mx-auto mb-auto">
                                <p className="leading-[1.2] tracking-[0.1em] text-[1.25rem]">
                                    Дякую за книги! Все добре, прийшли швидше, ніж я очікував, якість друку чудова, переклад від штучного інтелекту теж досить гарний.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <Image src={locationIcon} alt="Location Icon" className="mr-[7px]"/>
                                    <p className="font-[600] leading-[1.2] tracking-[0.1em]">
                                        Одеса
                                    </p>
                                </div>

                                <span className="font-[600] leading-[1.2] tracking-[0.1em]">
                                    09.02.2023
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Testimonials;