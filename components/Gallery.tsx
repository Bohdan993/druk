import {FC} from 'react';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Options } from '@splidejs/splide';
import Image from 'next/image';
import { IGallerysingle } from '../strapitypes/Gallerysingle';
import { IGallery } from '../strapitypes/Gallery';
import { baseUrl } from '@/constants';


const sliderOptions: Options = {
    type: "loop",
    perPage: 5,
    pagination: false,
    perMove: 1,
    focus: "center",
    updateOnMove: true,
    start: 2,
    gap: 35,
    fixedWidth: "210px",
    keyboard: 'global',
    breakpoints: {
        991: {
            perPage: 5,
            gap: "-80px"
        },
        767: {
            perPage: 3,
        }
    }
    
};


type GalleryProps = {
    data: IGallery[],
    dataSingle: IGallerysingle
}

const Gallery: FC<GalleryProps> = ({data, dataSingle}) => {

    return (
        <div className="gallery bg-skin-light  py-[45px] md:py-[60px] lg:py-[75px]" id={dataSingle?.attributes?.sectionid || "#"}>
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[40px] px-[10px]">{dataSingle?.attributes?.title}</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
            <Splide className="books-gallery min-h-[470px]" aria-label="Books gallery" options={sliderOptions} hasTrack={false}>
                <SplideTrack>
                    {
                        data?.map(el => {
                            console.log(el);
                            return(
                                <SplideSlide className="relative cursor-pointer" key={el?.id}>
                                    <div>
                                        <div className="books-gallery-image-container">
                                            <Image className="mx-auto" src={baseUrl + el?.attributes?.image?.data?.attributes?.url!} width={el?.attributes?.image?.data?.attributes?.width!} height={el?.attributes?.image?.data?.attributes?.height!} alt="Book" />
                                        </div>
                                        <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-[1.125rem] text-black-2  mx-auto mt-[35px]">{el?.attributes?.name}</p>
                                        <p className="text-center font-[500] leading-[1.2] tracking-[0.2em] text-black-2  mx-auto">{el?.attributes?.size}</p>
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
        </div>
    );
};

export default Gallery;