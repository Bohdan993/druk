import { useAppDispatch } from "@/store";
import {FC, useEffect} from "react";
import Select, { components, DropdownIndicatorProps,OptionProps} from 'react-select';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { testimonialsApi } from "@/api/testimonials-api";
import { setShowPopup } from "@/slices/popups";



type Inputs = {
    name: string;
    phoneoperator: string;
    phonenum: string;
    url: string;
    file: string;
    bounding: "Тверда" | "М'яка";
    color: "ЧБ" | "Колір";
    advancedservices: string;
    bookname: string;
    bookauthor: string;
    comment: string;
    "file-radio": string;
};

type OptionType = {
    readonly label: string;
    readonly value: string;
}

const schema = yup.object({
    name: yup.string()
    .required("Це поле обов'язкове для заповнення")
    .min(3, "Поле має містити мінімум 3 символа")
    .max(20, "Поле має містити максимум 20 символів")
  }).required();

const phoneOpts: OptionType[] = [
    {value: "Viber", label: "Viber"},
    {value: "What`s up", label: "What`s up"},
    {value: "Telegram", label: "Telegram"},
    {value: "Дзвінок на мобільний", label: "Дзвінок на мобільний"},
]

const additionalServicesOpts: OptionType[] = [
    {value: "Дарчий напис", label: "Дарчий напис"},
    {value: "Переддрукова підготовка тексту", label: "Переддрукова підготовка тексту"},
    {value: "Ai Дизайн", label: "Ai Дизайн"},
    {value: "Ai Переклад", label: "Ai Переклад"}

];

const DropdownIndicator = (
    props: DropdownIndicatorProps<OptionType>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            fill="none"
            viewBox="0 0 10 7"
            >
            <path

                d="M.413 2.606L4.02 6.554c.543.595 1.42.595 1.964 0L9.59 2.606C10.468 1.646 9.84 0 8.6 0H1.389C.148 0-.464 1.646.413 2.606z"
            ></path>
            </svg>
      </components.DropdownIndicator>
    );
  };


  const Option = (props: OptionProps<OptionType>) => {
    // console.log(props);
    return (
        <div className={props?.isSelected ? "selected-option": ""}>
            <components.Option {...props} />
        </div>
        
    );
  };


const OrderWithFilePopup: FC<any> = (props) => {

    const dispatch = useAppDispatch();

    const { register, setValue, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>(
        {   
            mode: "onBlur",
            resolver: yupResolver(schema)
        }
    );

    const watchFileRadio = watch("file-radio");

    const onSubmit: SubmitHandler<Inputs> = async data => {
        try {
            // await testimonialsApi.postTestimonial({
            //     name: data?.name,
            //     review: data?.review,
            //     town: data?.town,
            // })
            dispatch(setShowPopup({key: "showTestimonialsThanksPopup", state: true}));
        } catch(err) {

        }

    }
    
    useEffect(()=>{
        setValue("phoneoperator", phoneOpts[0]["value"]);
    }, [setValue]);

    return (    
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-[15px] relative">
                <div className="flex justify-between items-center">
                    <label htmlFor={`${props?.id}-name`} className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Ваше ім'я"}</label>
                    <input className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[173px]" type="text" placeholder="Введіть ваше ім'я" id={`${props?.id}-name`} {...register("name")} />
                </div>
                <p className="text-danger absolute right-0 bottom-0">{errors?.name?.message}</p>
            </div>
            <div className="pb-[15px] relative">
                <div className="flex justify-between items-center">
                    <label htmlFor={`${props?.id}-phonenum`} className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Телефон"}</label>
                    <div>
                        <Select<OptionType>
                            options={phoneOpts} 
                            defaultValue={phoneOpts[0]}
                            onChange={(selectOptionType) => setValue("phoneoperator", selectOptionType?.["value"] || "")}
                            className="popup-select order-popup-select"
                            classNamePrefix="popup"
                            components={{ DropdownIndicator }}
                            isSearchable={false}
                    />
                    </div>
                    <input className="input font-[600] leading-[1.2] py-[7.5px] px-[10px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[94px]" type="tel" placeholder="+380970000000" id={`${props?.id}-phonenum`} {...register("phonenum")} />
                </div>
                <p className="text-danger absolute right-0 bottom-0">{errors?.phonenum?.message}</p>
            </div>
            <div className="pb-[15px] relative">
                <div className="flex justify-between items-center">
                    <label htmlFor={`${props?.id}-bookname`} className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Назва книги"}</label>
                    <input className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[173px]" type="text" placeholder="Введіть повну назву" id={`${props?.id}-bookname`} {...register("bookname")} />
                </div>
                <p className="text-danger absolute right-0 bottom-0">{errors?.bookname?.message}</p>
            </div>
            <div className="pb-[15px] relative">
                <div className="flex justify-between items-center">
                    <label htmlFor={`${props?.id}-bookauthor`} className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Автор книги"}</label>
                    <input className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[173px]" type="text" placeholder="Введіть ФІО" id={`${props?.id}-bookauthor`} {...register("bookauthor")} />
                </div>
                <p className="text-danger absolute right-0 bottom-0">{errors?.bookauthor?.message}</p>
            </div>
            <div>
                <fieldset>
                    <div>
                        <div>
                            <input type="radio" id={`${props?.id}-file`} checked value="Файл" {...register("file-radio")} />
                            <label htmlFor={`${props?.id}-bounding1`}>

                            </label>
                        </div>
                        <div>
                            <input type="radio" id={`${props?.id}-file2`} value="Посилання" {...register("file-radio")} />
                            <label htmlFor={`${props?.id}-file2`}>
                                Посилання
                                <input className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[173px]" type="text" placeholder="Введіть посилання" id={`${props?.id}-url`} {...register("url")} />
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend className="font-bold text-[1.125] leading-[1.2] tracking-[0.2em]">
                        Параметри книги:
                    </legend>
                    <div className="flex justify-between">
                        <p>Палітурка</p>
                        <div>
                            <input type="radio" id={`${props?.id}-bounding1`} checked value="Тверда" {...register("bounding")} />
                            <label htmlFor={`${props?.id}-bounding1`}>Тверда</label>
                        </div>
                        <div>
                            <input type="radio" id={`${props?.id}-bounding2`} value="М'яка" {...register("bounding")}/>
                            <label htmlFor={`${props?.id}-bounding2`}>{"М'яка"}</label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p>Колір блоку</p>
                        <div>
                            <input type="radio" id={`${props?.id}-color1`} checked value="ЧБ" {...register("color")}/>
                            <label htmlFor={`${props?.id}-color1`}>ЧБ</label>
                        </div>
                        <div>
                            <input type="radio" id={`${props?.id}-color2`} value="Колір" {...register("color")} />
                            <label htmlFor={`${props?.id}-color2`}>{"Колір"}</label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="pb-[15px] relative">
                <div className="flex justify-between items-center">
                    <label className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">{"Додаткові послуги"}</label>
                    <div>
                        <Select
                            isMulti
                            options={additionalServicesOpts} 
                            onChange={(selectOptionType) => setValue("advancedservices", (selectOptionType as any)["value"] || "")}
                            className="popup-select order-popup-select-2"
                            classNamePrefix="popup"
                            isSearchable={false}
                            placeholder={"Оберіть послуги"}
                            components={{ DropdownIndicator, Option }}
                            isClearable={false}
                            hideSelectedOptions={false}
                            controlShouldRenderValue={false}
                            closeMenuOnSelect={false}
                            closeMenuOnScroll={false}
                            menuIsOpen={true}
                            
                    />
                    </div>
                </div>
                <p className="text-danger absolute right-0 bottom-0">{errors?.phonenum?.message}</p>
            </div>
            <div className="pb-[25px] relative">
                <div>
                    <label className="font-bold text-[1.125] leading-[1.2] tracking-[0.2em]" htmlFor="">Додайте коментар:</label>
                    <textarea rows={2} className="textarea bg-white-glass resize-none w-full border-fiolet border-[1px] rounded-[10px] px-[20px] py-[10px] outline-none font-[500] line-height-[1.2]"
                        {...register("comment")}
                    >
                    </textarea>
                </div>

                <p className="text-danger absolute left-0 bottom-[3px]">{errors?.comment?.message}</p>
            </div>
            <div className="w-full flex justify-center">
                <button disabled={isSubmitting} type="submit" className="popup-btn-1 font-[700!important]">Замовити</button>
            </div>
        </form>
    )
}

export default OrderWithFilePopup;