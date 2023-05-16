import {FC} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import Image from 'next/image';
import book2Image from '../public/book-2.png';
import book3Image from '../public/book-3.png';



const sliderOptions: Options = {
    perPage: 4.77,
    arrows: false,
    pagination: false,
    perMove: 1,
    focus: "center",
    updateOnMove: true,
    start: 2,
    gap: 35,
    keyboard: 'global',
    breakpoints: {
        992: {
            fixedWidth: "240px",
            perPage: 5,
            gap: "-80px"
        },
        768: {
            perPage: 3
        }
    }
    
};

const Gallery: FC = () => {
    return (
        <div className="gallery bg-skin-light  py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[57.6px] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px]">Галерея</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
            <Splide className="books-gallery lg:min-h-[400px]" aria-label="Books gallery" options={sliderOptions}>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book2Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book2Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book2Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto"src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto"src={book2Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book2Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
                <SplideSlide className="relative cursor-pointer">
                    <Image className="mx-auto" src={book3Image} alt="Book" />
                    <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-[#111111] max-w-[130px] mx-auto mt-[35px]">Назва книги та її розмір</p>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    );
};

export default Gallery;