import {FC, ReactElement, useState} from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
// @ts-ignore
import Rodal from 'rodal';
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
    fixedWidth: "350px",
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

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className="testimonials bg-light-green  py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[57.6px] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem]">Відгуки клієнтів</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <div>
                    <Splide hasTrack={false} className="testimonials-carousel" aria-label="Books gallery" options={sliderOptions}>
                        <SplideTrack>
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
                    <div>

                    </div>
                    <Rodal visible={show} onClose={handleClose}>
                        <div>Content</div>
                    </Rodal>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;