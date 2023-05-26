import { describeArc } from '@/utils/describeArc';
import {FC, Fragment, useState, useEffect, MouseEvent, useRef} from 'react';
import RotorPieceType2 from './RotorPieceType2';
import {RotorProps, Rotorpiece} from "@/types/rotors";
import { updateRotor } from '@/slices/rotors';
import { useAppDispatch } from '@/store';


const RotorType2: FC<RotorProps> = ({cx, cy, r, w, h, data}) => {

    const dispatch = useAppDispatch();
    const pieces = data?.attributes?.rotorpiece;
    const textRef = useRef<SVGTextElement | null>(null);
    const [textRect, setTextRect] = useState<DOMRect | null>(null);
    const [activePiece, setActivePiece] = useState<Rotorpiece>(data?.attributes?.rotorpiece?.filter(el=>el?.active)[0]);

    const maxNumOfPieces = 15;
    const startAngleCoef = 8;
    const startAngle = (360 - ((360/maxNumOfPieces) * pieces?.length))/2;
    const endAngle = 360 - startAngle;

    const handleClick = (id: number, e: MouseEvent<SVGGElement>) => {
            const newArr = pieces?.map(el => {
                if(id === el?.id) {
                    return {
                        ...el,
                        active: true
                    }
                }
                return {
                    ...el,
                    active: false
                }
            })

            const newData = {
                id: data?.id,
                attributes: {
                    title: data?.attributes?.title,
                    type: data?.attributes?.type,
                    rotorpiece: newArr
                }
            }

            dispatch(updateRotor(newData));

        return;
    }

    useEffect(() => {
        const activePiece = pieces?.filter(el=>el?.active)[0];
        setActivePiece(activePiece);
    }, [pieces]);

    useEffect(() => {
        setTextRect(textRef!?.current!?.getBoundingClientRect());
    }, []);


    return (
        <div className="h-[260px] md:h-[270px] flex flex-col items-center mb-[35px]">
            <p className="font-bold leading-[25px] tracking-[0.2em] text-black text-[1.125rem] md:text-[1.281rem] text-center">{data?.attributes?.title}</p>
            <div className="mt-auto w-[238px] h-[238px] relative bg-skin-dark">
                <div  className="w-[238px] h-[238px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <svg className=" fill-none cursor-pointer" viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
                        <filter id='shadow-type2' colorInterpolationFilters="sRGB" x="-40%" y="-40%" width="180%" height="180%">
                            <feDropShadow dx="3" dy="4" stdDeviation="3" floodOpacity="0.45" floodColor="#9882AC"/>
                        </filter>
                        <g>
                            <path className="stroke-natural-green stroke-[6px]" d={describeArc(cx, cy, r, startAngle - startAngleCoef, endAngle + startAngleCoef)} strokeLinecap="round"></path>
                        </g>
                        <g>
                            
                            <circle cx={cx} cy={cy} r="51" filter="url(#shadow-type2)" className={`fill-natural-green stroke-natural-green stroke-[1px] transition-all duration-50 ease-in`}/>
                            <text ref={textRef} x={(cx - textRect?.width!/2) || 0} y={(cx + textRect?.height!/4) || 0} className="fill-fiolet font-montserrat font-[500] leading-[1] text-[18.16px]">До {activePiece?.text}</text>
                        </g>
                        {pieces?.map((el, i) => {
                            return (
                                <Fragment key={el?.id}>
                                    <RotorPieceType2
                                        startAngle={startAngle}
                                        slices={pieces?.length}
                                        cx={cx}
                                        cy={cy}
                                        i={i}
                                        el={el}
                                        r={r}
                                        handleClick={(id, e) => handleClick(id, e)}
                                    />
                                </Fragment>
                            )
                        })}
                    </svg>
                </div>
            </div>
        </div>
    );


};

export default RotorType2;