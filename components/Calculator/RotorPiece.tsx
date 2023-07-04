import { degreesToRadians } from '@/utils/degreesToRadians';
import { useRef, useState, useEffect, FC, MouseEvent} from 'react';
import { Rotorpiece } from '@/types/rotors';
import { baseUrl } from '@/constants';
import { makeTooltipMarkup } from '@/utils/makeTooltipMarkup';
import infoIcon from "@/public/icon-info-2.svg";



type RotorPieceProps = {
    slices: number;
    i: number;
    cx: number;
    cy: number;
    r: number;
    el: Rotorpiece;
    handleClick: (id: number, e: MouseEvent<SVGGElement>) => void
}

type RotorPieceOtherProps = {
    "data-tooltip-id"?: string;
    "data-tooltip-html"?: string;
}

const RotorPiece: FC<RotorPieceProps> = ({el, i, slices, cx, cy, r, handleClick}) => {

    const imageRef = useRef<SVGImageElement | null>(null);
    const [imageRect, setImageRect] = useState<DOMRect | null>(null);

    const fromAngle = (i * 360 / slices);
    const toAngle = ((i + 1) * 360 / slices);
    const fromCoordX = cx + (r * Math.cos(degreesToRadians(fromAngle)));
    const fromCoordY = cy + (r * Math.sin(degreesToRadians(fromAngle)));
    const toCoordX = cx + (r * Math.cos(degreesToRadians(toAngle)));
    const toCoordY = cy + (r * Math.sin(degreesToRadians(toAngle)));

    const dAngle = toAngle - fromAngle;
    const toAngle2 = ((i + 1) * 360) / slices - (dAngle/2);
    const halfR = r/2;
    const toCoordX2 = cx + (halfR * Math.cos(degreesToRadians(toAngle2)));
    const toCoordY2 = cy + (halfR * Math.sin(degreesToRadians(toAngle2)));

    const rotorPieceOtherProps: RotorPieceOtherProps  = {};

    if(el?.cluesitem?.clueitemtext) {
        rotorPieceOtherProps["data-tooltip-id"] = `rotors-tooltip`;
        rotorPieceOtherProps["data-tooltip-html"] = makeTooltipMarkup({icon: infoIcon, tooltip: el?.cluesitem?.clueitemtext, list: []});
    }

    useEffect(() => {
        setImageRect(imageRef!.current!.getBoundingClientRect());
    }, []);


    return (
            <g onClick={(e) => handleClick(el?.id, e)} {...rotorPieceOtherProps} className="outline-none">
                <path className={`${el?.active? "fill-natural-green": "fill-skin-dark"} transition-all duration-50 ease-in`} d={'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + " " + r + ' 0 0 1 ' + toCoordX + ' ' + toCoordY + 'z'}></path>
                <path strokeOpacity="1" filter={`${el?.active ? 'url(#shadow) url(#shadow2)': 'url(#shadow3)'}`}  d={'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + " " + r + ' 0 0 1 ' + toCoordX + ' ' + toCoordY + 'z'}></path>
                <image ref={imageRef} href={baseUrl + el?.image?.data?.attributes?.url} className={`defaultImage ${imageRect?.width && imageRect?.height ? "opacity-1" : "opacity-0" }`} style={{transform: `translate(${toCoordX2 - imageRect?.width!/2}px, ${toCoordY2 - imageRect?.height!/2}px)`}}></image>
            </g>
    );
    
};

export default RotorPiece;