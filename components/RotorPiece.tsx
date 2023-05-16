import { degreesToRadians } from '@/utils/degreesToRadians';
import { useRef, useState, useEffect, FC, MouseEvent} from 'react';
import { Rotorpiece } from '@/types/rotors';


type RotorPieceProps = {
    slices: number;
    i: number;
    cx: number;
    cy: number;
    r: number;
    el: Rotorpiece;
    handleClick: (id: number, e: MouseEvent<SVGGElement>) => void
}

const baseUrl: string = "http://localhost:1337";


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


    useEffect(() => {
        setImageRect(imageRef!.current!.getBoundingClientRect());
    }, []);

    return (
            <g onClick={(e) => handleClick(el?.id, e)}>
                <path className={`${el?.active? "fill-natural-green": "fill-skin-dark"} transition-all duration-50 ease-in`} d={'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + " " + r + ' 0 0 1 ' + toCoordX + ' ' + toCoordY + 'z'}></path>
                <path strokeOpacity="1" filter={`${el?.active ? 'url(#shadow) url(#shadow2)': 'url(#shadow3)'}`}  d={'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + " " + r + ' 0 0 1 ' + toCoordX + ' ' + toCoordY + 'z'}></path>
                <image ref={imageRef} href={baseUrl + el?.image?.data?.attributes?.url} className="defaultImage" style={{transform: `translate(${toCoordX2 - imageRect?.width!/2}px, ${toCoordY2 - imageRect?.height!/2}px)`}}></image>
            </g>
    );
    
};

export default RotorPiece;