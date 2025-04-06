/** @format */

import { useAppDispatch } from "@/store";
import { FC, useEffect, useState } from "react";
import Select, {
  components,
  DropdownIndicatorProps,
  OptionProps,
} from "react-select";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setShowPopup } from "@/slices/popups";
import { orderApi } from "@/fetch/order-api";
import { crmApi } from "@/fetch/crm-api";

type Inputs = {
  name: string;
  phoneoperator: string;
  phonenum: string;
  bounding: "Тверда" | "М'яка";
  color: "ЧБ" | "Колір";
  advancedservices: string;
  bookname: string;
  bookauthor: string;
  comment: string;
  "file-radio": "Файл" | "Посилання";
};

type OptionType = {
  readonly label: string;
  readonly value: string;
};

const schema = yup
  .object({
    "file-radio": yup.string(),
    name: yup
      .string()
      .required("Це поле обов'язкове для заповнення")
      .min(3, "Поле має містити мінімум 3 символа")
      .max(20, "Поле має містити максимум 20 символів"),
    phonenum: yup
      .string()
      .matches(
        /^\+?3?8?(0[5-9][0-9]\d{7})$/,
        "Введено не коректний номер телефону"
      )
      .required("Це поле обов'язкове для заповнення"),
    bookname: yup.string().required("Це поле обов'язкове для заповнення"),
    comment: yup.string().max(200, "Поле має містити максимум 200 символів"),
  })
  .required();

const phoneOpts: OptionType[] = [
  { value: "Viber", label: "Viber" },
  { value: "What`s up", label: "What`s up" },
  { value: "Telegram", label: "Telegram" },
  { value: "Дзвінок на мобільний", label: "Дзвінок на мобільний" },
];

const additionalServicesOpts: OptionType[] = [
  { value: "Дарчий напис", label: "Дарчий напис" },
  {
    value: "Переддрукова підготовка тексту",
    label: "Переддрукова підготовка тексту",
  },
  { value: "Ai Дизайн", label: "Ai Дизайн" },
  { value: "Ai Переклад", label: "Ai Переклад" },
];

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType>) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="7"
        fill="none"
        viewBox="0 0 10 7"
      >
        <path d="M.413 2.606L4.02 6.554c.543.595 1.42.595 1.964 0L9.59 2.606C10.468 1.646 9.84 0 8.6 0H1.389C.148 0-.464 1.646.413 2.606z"></path>
      </svg>
    </components.DropdownIndicator>
  );
};

const Option = (props: OptionProps<OptionType>) => {
  return (
    <components.Option
      {...props}
      className={`${
        props?.isSelected ? "selected-option" : ""
      } order-popup-select-2-option items-center px-[10px] py-[6px]`}
    >
      <div className="w-[15px] h-[15px] border-black border-[2px] mr-[10px] min-w-[15px] flex text-center items-center text-[12px] leading-[15px] font-[400]">
        {props?.isSelected ? "✔" : ""}
      </div>
      <p className="transition-colors">{props?.label}</p>
    </components.Option>
  );
};

const OrderWithoutFilePopup: FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      bounding: "Тверда",
      color: "ЧБ",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await orderApi.postOrder({
        name: data?.name || "",
        bounding: data?.bounding,
        color: data?.color,
        comment: data?.comment || "",
        advancedservices: data?.advancedservices || "",
        phonenum: data?.phonenum || "",
        phoneoperator: data?.phoneoperator || "",
        bookname: data?.bookname || "",
        bookauthor: data?.bookauthor || "",
      });

      await crmApi.postCRM({
        name: data?.name || "",
        bounding: data?.bounding,
        color: data?.color,
        comment: data?.comment || "",
        advancedservices: data?.advancedservices || "",
        phonenum: data?.phonenum || "",
        phoneoperator: data?.phoneoperator || "",
        bookname: data?.bookname || "",
        bookauthor: data?.bookauthor || "",
      });

      dispatch(setShowPopup({ key: "showOrderThanksPopup", state: true }));
    } catch (err) {
      dispatch(setShowPopup({ key: "showFailPopup", state: true }));
    }
  };

  useEffect(() => {
    setValue("phoneoperator", phoneOpts[0]["value"]);
  }, [setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[315px] md:w-auto"
    >
      <div className="pb-[10px] md:pb-[15px] relative">
        <div className="flex justify-between items-center">
          <label
            htmlFor={`${props?.id}-name`}
            className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2] cursor-pointer"
          >
            {"Ваше ім'я"}
          </label>
          <input
            className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[190px] md:max-w-[173px]"
            type="text"
            placeholder="Введіть ваше ім'я"
            id={`${props?.id}-name`}
            {...register("name")}
          />
        </div>
        <p className="text-danger absolute right-0 bottom-[-2px] md:bottom-0">
          {errors?.name?.message}
        </p>
      </div>
      <div className="pb-[20px] md:pb-[35px] relative">
        <div className="flex justify-between items-center">
          <label
            htmlFor={`${props?.id}-phonenum`}
            className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2] cursor-pointer"
          >
            {"Телефон"}
          </label>
          <div className="flex items-center">
            <Select<OptionType>
              options={phoneOpts}
              defaultValue={phoneOpts[0]}
              onChange={(selectOptionType) =>
                setValue("phoneoperator", selectOptionType?.["value"] || "")
              }
              className="popup-select order-popup-select mr-[5px]"
              classNamePrefix="popup"
              components={{ DropdownIndicator }}
              isSearchable={false}
              isClearable={false}
              closeMenuOnScroll={false}
            />
            <input
              className="input font-[600] leading-[1.2] py-[7.5px] px-[10px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[104px] md:max-w-[94px]"
              type="tel"
              placeholder="+380970000000"
              id={`${props?.id}-phonenum`}
              {...register("phonenum")}
            />
          </div>
        </div>
        <p className="text-danger absolute right-0 bottom-[7px] md:bottom-[20px]">
          {errors?.phonenum?.message}
        </p>
      </div>
      <div className="pb-[10px] md:pb-[15px] relative">
        <div className="flex justify-between items-center">
          <label
            htmlFor={`${props?.id}-bookname`}
            className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2] cursor-pointer"
          >
            {"Назва книги"}
          </label>
          <input
            className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[190px] md:max-w-[173px]"
            type="text"
            placeholder="Введіть повну назву"
            id={`${props?.id}-bookname`}
            {...register("bookname")}
          />
        </div>
        <p className="text-danger absolute right-0 bottom-[-2px] md:bottom-0">
          {errors?.bookname?.message}
        </p>
      </div>
      <div className="pb-[20px] md:pb-[35px] relative">
        <div className="flex justify-between items-center">
          <label
            htmlFor={`${props?.id}-bookauthor`}
            className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2] cursor-pointer"
          >
            {"Автор книги"}
          </label>
          <input
            className="input font-[600] leading-[1.2] py-[8.5px] px-[15px] text-black border-black border-[1px] rounded-[15px] outline-none text-[14px] w-full max-w-[190px] md:max-w-[173px]"
            type="text"
            placeholder="Введіть ФІО"
            id={`${props?.id}-bookauthor`}
            {...register("bookauthor")}
          />
        </div>
      </div>
      <div>
        <fieldset className="mb-[15px] md:mb-[35px]">
          <legend className="font-bold text-[1.125rem] leading-[1.2] tracking-[0.2em] mb-[10px] md:mb-[15px]">
            Параметри книги:
          </legend>
          <div className="flex justify-between mb-[7px] md:mb-[12px]">
            <p className="bais-[30%] mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">
              Палітурка
            </p>
            <div className="flex justify-between basis-[60%]">
              <div className="flex items-center">
                <input
                  type="radio"
                  id={`${props?.id}-bounding1`}
                  value="Тверда"
                  {...register("bounding")}
                  className="mr-[10px]"
                />
                <label
                  htmlFor={`${props?.id}-bounding1`}
                  className="cursor-pointer"
                >
                  Тверда
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id={`${props?.id}-bounding2`}
                  value="М'яка"
                  {...register("bounding")}
                  className="mr-[10px]"
                />
                <label
                  htmlFor={`${props?.id}-bounding2`}
                  className="cursor-pointer"
                >
                  {"М'яка"}
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="bais-[30%] mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2]">
              Колір блоку
            </p>
            <div className="flex justify-between  basis-[60%]">
              <div className="flex items-center">
                <input
                  type="radio"
                  id={`${props?.id}-color1`}
                  value="ЧБ"
                  {...register("color")}
                  className="mr-[10px]"
                />
                <label
                  htmlFor={`${props?.id}-color1`}
                  className="cursor-pointer"
                >
                  ЧБ
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id={`${props?.id}-color2`}
                  value="Колір"
                  {...register("color")}
                  className="mr-[10px]"
                />
                <label
                  htmlFor={`${props?.id}-color2`}
                  className="cursor-pointer"
                >
                  {"Колір"}
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="pb-[15px] relative">
        <div className="flex justify-between items-center">
          <label className="mr-[10px] text-black font-[600] tracking-[0.1em] leading-[1.2] whitespace-nowrap">
            {"Додаткові послуги"}
          </label>
          <div>
            <Select
              isMulti
              options={additionalServicesOpts}
              onChange={(selectOptionType) =>
                setValue(
                  "advancedservices",
                  selectOptionType.map((el) => el?.value).join(" | ") || ""
                )
              }
              className="popup-select order-popup-select-2"
              classNamePrefix="popup"
              placeholder={"Оберіть послуги"}
              components={{ DropdownIndicator, Option }}
              isSearchable={false}
              isClearable={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              closeMenuOnSelect={false}
              closeMenuOnScroll={false}
            />
          </div>
        </div>
      </div>
      <div className="pb-[12px] md:pb-[25px] relative">
        <div>
          <label
            className="font-bold text-[1.125rem] leading-[1.2] tracking-[0.2em] mb-[15px] block"
            htmlFor=""
          >
            Додайте коментар:
          </label>
          <textarea
            rows={2}
            className="textarea bg-white-glass resize-none w-full border-fiolet border-[1px] rounded-[10px] px-[20px] py-[10px] outline-none font-[500] line-height-[1.2]"
            {...register("comment")}
          ></textarea>
        </div>

        <p className="text-danger absolute left-0 bottom-[-20px]">
          {errors?.comment?.message}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          disabled={isSubmitting}
          type="submit"
          className="popup-btn-1 text-center font-[700!important]"
        >
          Замовити
        </button>
      </div>
    </form>
  );
};

export default OrderWithoutFilePopup;
