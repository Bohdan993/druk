import { degreesToRadians } from '@/utils/degreesToRadians';
import { FC, MouseEvent, useRef, useEffect, useState } from 'react';
import { Rotorpiece } from '@/types/rotors';



type RotorPieceType2Props = {
    slices: number;
    i: number;
    cx: number;
    cy: number;
    r: number;
    el: Rotorpiece;
    startAngle: number;
    handleClick: (id: number, e: MouseEvent<SVGGElement>) => void
}

const RotorPieceType2: FC<RotorPieceType2Props> = ({slices, i, cx, cy, r, startAngle, el, handleClick}) => {
    const textRef = useRef<SVGTextElement | null>(null);
    const [textRect, setTextRect] = useState<DOMRect | null>(null);

    const fromAngle = (i * (360 - startAngle * 2) / slices) + startAngle;
    const toAngle = ((i + 1) * (360 - startAngle * 2) / slices) + startAngle;
    const dAngle = toAngle - fromAngle;
    const toAngle2 = ((i + 1) * (360 - startAngle * 2)) / slices + startAngle - (dAngle/2);
    const toCoordX = cx + (r * Math.cos(degreesToRadians(toAngle2)));
    const toCoordY = cy + (r * Math.sin(degreesToRadians(toAngle2)));


    useEffect(() => {
        setTextRect(textRef!.current!.getBoundingClientRect());
    }, []);
    
    return (
        <g onClick={(e) => handleClick(el?.id, e)}>
            <circle cx={toCoordX} cy={toCoordY} r="16.45" filter="url(#shadow-type2)" className={`${el?.active? "fill-natural-green": "fill-skin-dark"} stroke-skin-dark stroke-[1px] transition-all duration-50 ease-in`}/>
            <text ref={textRef} x={(toCoordX - textRect?.width!/2) || 0} y={(toCoordY + textRect?.height!/4) || 0} className="fill-fiolet font-montserrat font-[500] leading-[1] text-[11.35px]">{el?.text}</text>
        </g>
    );
};

export default RotorPieceType2;