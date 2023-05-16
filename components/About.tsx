import Image from 'next/image';
import type { FC } from 'react';
import aboutBg from '../public/about.png';
import peopleGroupImg from '../public/people-group.svg';
import presentImg from '../public/present.svg';
import caseImg from '../public/case.svg';
import universityImg from '../public/university.svg';
import phototsImg from '../public/photos.svg';
import allSidesDesignImg from '../public/all-sides-design.png';
import diffenentBindingImg from '../public/different-binding.png';
import diffenentFilesImg from '../public/different-files.png';


const About: FC = () => {
    return (
        <div className="about bg-skin-light py-[45px] md:py-[60px] lg:py-[75px]">
            <h2 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-black text-[2.25rem] md:text-[3rem] mb-[50px]">Про нас</h2>
            <div className="container m-auto px-[10px] md:px-[50px] lg:px-[55px] xl:px-[60px] w-full max-w-[1290px]">
                <article className="flex justify-between items-start mb-[50px] flex-wrap lg:flex-nowrap">
                    <div className="basis-[100%] lg:basis-[44.14%] lg:pr-[29px]">
                        <h3 className="font-bold text-[1.5rem] leading-[28.8px] tracking-[0.2em] text-[#111111] max-w-[330px] mb-[50px]">
                            Унікальність сервісу побудованого на досвіді.
                        </h3>
                        <blockquote className="font-[600] leading-[19.2px] tracking-[0.1em] text-black max-w-[335px] mb-[25px] border-l-[1px] border-l-natural-green pl-[22px]">
                            Ми не стверджуємо, що ми кращі. <span className="text-natural-green">Ми стверджуємо, що день за днем ми стаємо краще.</span> Порівняння себе із іншими - шлях конкуренції і протистояння. Порівняння себе із собою вчорашнім - шлях творчого розвитку. 
                        </blockquote>
                        <p className="leading-[19.2px] tracking-[0.09em] font-normal">
                            Сервіс Сам-Собі-Друкар (Друкуй-Читай-Міркуй, Друкуй-Читай-Мрій-Дій) - це сучасна модель купівлі паперових книг. Читач має можливість завантажити на сервіс власний файл-джерело, або дати посилання на файл, або замовити пошук файлу у мережі, і роздрукувати із цього файлу паперову книгу, з потрібними йому параметрами і у кількості від 1 екземпляра.
                        </p>
                    </div>
                    <div className="basis-[100%] lg:basis-[55.86%] lg:pl-[29px]">
                        <Image src={aboutBg} alt="Office" className="w-[100%]"/>
                    </div>
                </article>
                <div className="flex justify-between items-center mx-[-16.5px] mb-[65px]">
                    <figure className="flex flex-col items-center basis-[33.3%] px-[16.5px]">
                        <Image src={diffenentFilesImg} alt="Icon" className="mb-[18px]"></Image>
                        <figcaption className="text-center leading-[1.2] tracking-[0.1em] max-w-[224px]">Друк можливий не лише із pdf формату, але і з fb2, epub та djvu.</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center basis-[33.3%] px-[16.5px]">
                        <Image src={diffenentBindingImg} alt="Icon" className="mb-[18px]"></Image>
                        <figcaption className="text-center leading-[1.2] tracking-[0.1em] max-w-[224px]">Палітурка книги може бути не тільки м’якою, але і твердою, блок сторінок не тільки склеєний, але і прошитий.</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center basis-[33.3%] px-[16.5px]">
                        <Image src={allSidesDesignImg} alt="Icon" className="mb-[18px]"></Image>
                        <figcaption className="text-center leading-[1.2] tracking-[0.1em] max-w-[224px]">Дизайн повний, тобто не тільки передня обкладинка містить дизайн, але і задня, і торець.</figcaption>
                    </figure>
                </div>
                <div>
                    <h3 className="text-center font-bold leading-[1.2] tracking-[0.2em] text-[#111111] text-[1.5rem] mb-[55px]">Ми будемо в нагоді, якщо потрібні:</h3>
                    <ul className="flex justify-center items-start mx-[-31px] flex-wrap">
                        <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]">
                            <Image src={peopleGroupImg} alt="Icon" className="mb-[35px]"></Image>
                            <p className="text-center leading-[1.2] tracking-[0.1em]">матеріали для учасників семінарів та конференцій</p>
                        </li>
                        <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]">
                            <Image src={presentImg} alt="Icon" className="mb-[35px]"></Image>
                            <p className="text-center leading-[1.2] tracking-[0.1em]">лімітований авторський наклад для подарунків</p>
                        </li>
                        <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]">
                            <Image src={caseImg} alt="Icon" className="mb-[35px]"></Image>
                            <p className="text-center leading-[1.2] tracking-[0.1em]">спеціалізована література, відсутня у продажу</p>
                        </li>
                        <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]">
                            <Image src={universityImg} alt="Icon" className="mb-[35px]"></Image>
                            <p className="text-center leading-[1.2] tracking-[0.1em]">учбова і дитяча література</p>
                        </li>
                        <li className="flex flex-col items-center px-[31px] mb-[55px] lg:mb-0 basis-[33.3%] lg:basis-[20%]">
                            <Image src={phototsImg} alt="Icon" className="mb-[35px]"></Image>
                            <p className="text-center leading-[1.2] tracking-[0.1em]">великоформатні кольорові книги (флористика, рукоділля, архітектура, анатомія та інш.)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;