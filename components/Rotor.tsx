import {FC, Fragment, MouseEvent} from 'react';
import RotorPiece from './RotorPiece';
import {RotorProps, Rotorpiece} from "../types/rotors";
import { updateRotor } from '@/slices/rotors';
import { useAppDispatch } from '@/store';


const Rotor: FC<RotorProps> = ({cx, cy, r, w, h, data}) => {

    const dispatch = useAppDispatch();
    const pieces = data?.attributes?.rotorpiece;

    const handleClick = (id: number, e: MouseEvent<SVGGElement>) => {
            if(data?.attributes?.type === 'singleselect') {
                const newArr = pieces.map(el => {
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
                });

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

            const newArr = pieces.map(el => {
                if(id === el?.id) {
                    return {
                        ...el,
                        active: !el?.active
                    }
                }
                return {
                    ...el
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

    return (
        <div className="h-[270px] flex flex-col items-center mb-[35px]">
            <p className="font-bold leading-[25px] tracking-[0.2em] text-black text-[1.281rem] text-center">{data?.attributes?.title}</p>
            <div className="mt-auto w-[195px] h-[195px] rounded-[50%] relative bg-skin-dark" style={{boxShadow: "2.83784px 2.83784px 8.51351px rgba(0, 0, 0, 0.25), -2.83784px -2.83784px 8.51351px 0.567568px #FBF5E9"}}>
                <div  className="w-[185px] h-[185px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] bg-rotor-gradient from-skin-light to-skin-dark">
                    <svg className="stroke-skin-dark rounded-[50%] stroke-[0.2px] fill-none cursor-pointer" viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
                        <filter id='shadow' colorInterpolationFilters="sRGB">
                            <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodOpacity="1" floodColor="#868A7B"/>
                        </filter>
                        <filter id='shadow2' colorInterpolationFilters="sRGB">
                            <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodOpacity="1" floodColor="#868A7B"/>
                        </filter>
                        <filter id='shadow3' colorInterpolationFilters="sRGB">
                            <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.4" floodColor="#262626"/>
                        </filter>
                        {
                            pieces?.map((el, i) => {
                                return (
                                    <Fragment key={el?.id}>
                                        <RotorPiece 
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
                            })
                        }
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Rotor;