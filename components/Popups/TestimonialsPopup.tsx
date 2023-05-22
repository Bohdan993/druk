import { selectTownsState } from "@/slices/towns";
import { useAppDispatch, useAppSelector } from "@/store";
import {FC, useEffect, useMemo} from "react";
import {Towns} from "@/types/towns";
import Select from "react-select";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { testimonialsApi } from "@/api/testimonials-api";
import type {Raiting} from "@/types/testimonial";
import locationIcon from "@/public/icon-location.svg";
import Image from "next/image";
import { setShowPopup } from "@/slices/popups";



type Inputs = {
    review: string;
    raiting: number;
    name: string;
    town: string;
};

type Option = {
    readonly label: string;
    readonly value: string;
}

const schema = yup.object({
    review: yup.string()
    .required("Це поле обов'язкове для заповнення")
    .min(6, "Поле має містити мінімум 6 символів")
    .max(150, "Поле має містити максимум 150 символів"),
    name: yup.string()
    .required("Це поле обов'язкове для заповнення")
    .min(3, "Поле має містити мінімум 3 символа")
    .max(20, "Поле має містити максимум 20 символів")
  }).required();

const raiting: {[key: number]: Raiting} = {
    1: "Один",
    2: "Два",
    3: "Три",
    4: "Чотири",
    5: "П'ять"
}


const TestimonialsPopup: FC<any> = (props) => {

    const defaultRaiting = 4;
    const dispatch = useAppDispatch();
    const townsState: Towns = useAppSelector(selectTownsState);
    const selectOptions: Option[] = useMemo(() => townsState.TOWNS?.map(el => ({value: el.NAME , label: el.NAME})), [townsState.TOWNS]);

    const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>(
        {   
            mode: "onBlur",
            resolver: yupResolver(schema)
        }
    );
    const sleep = (ms: number) => new Promise((res) => {
        setTimeout(()=>{
            res("OK");
        }, ms);
    })
    const onSubmit: SubmitHandler<Inputs> = async data => {
        try {
            await sleep(5000);
            await testimonialsApi.postTestimonial({
                name: data?.name,
                review: data?.review,
                town: data?.town,
                raiting: raiting[data?.raiting]
            })
            dispatch(setShowPopup({key: "showTestimonialsThanksPopup", state: true}));
        } catch(err) {

        }

    }
    
    useEffect(()=>{
        setValue("raiting", defaultRaiting);
        setValue("town", selectOptions[0]["value"]);
    }, [setValue, selectOptions]);

    return (    
        <form onSubmit={handleSubmit(onSubmit)} className="pt-[38px]">
            <div className="flex justify-between items-center mb-[25px]">
                <div className="flex items-center">
                    <Image src={locationIcon} alt="Icon Location" className="mr-[9px] w-[20px] h-[30px]"/>
                    <Select<Option>
                        options={selectOptions} 
                        defaultValue={selectOptions[0]}
                        onChange={(selectOption) => setValue("town", selectOption?.["value"] || "")}
                        className="popup-select"
                        classNamePrefix="popup"
                        isSearchable={false}
                    />
                </div>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor={"#9882AC"}
                    color={"#9882AC"}
                    emptyIcon={<>☆</>}
                    filledIcon={<>★</>}
                    value={defaultRaiting} 
                    onChange={(newRaiting: number) => setValue("raiting", newRaiting)}
                />
            </div>
            <div className="pb-[25px] relative">
                <div>
                    <label htmlFor={`${props?.id}-name`} className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Ваше ім'я"}</label>
                    <input className="input font-[600] leading-[1] py-[8.5px] px-[15px] text-black border-natural-green border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[173px]" type="text" placeholder="Введіть ваше ім'я" id={`${props?.id}-name`} {...register("name")} />
                </div>
                <p className="text-danger absolute left-0 bottom-[3px]">{errors?.name?.message}</p>
            </div>
            <div className="pb-[25px] relative">
                <textarea rows={6} placeholder="Напишіть тут свій чесний відгук та пропозиції, ваша думка дуже важлива та цінна для нас." className="textarea resize-none w-full border-natural-green border-[1px] rounded-[10px] px-[20px] pt-[30px] pb-[45px] outline-none font-[500]"
                    {...register("review")}
                >
                </textarea>
                <p className="text-danger absolute left-0 bottom-[3px]">{errors?.review?.message}</p>
            </div>
            <div className="w-full flex justify-center">
                <button disabled={isSubmitting} type="submit" className="popup-btn-1">Опублікувати</button>
            </div>
        </form>
    )
}

export default TestimonialsPopup;