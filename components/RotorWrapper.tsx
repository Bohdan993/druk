import { FC } from 'react';
import Rotor from './Rotor';
import RotorType2 from './RotorType2';
import { Rotor as RotorType } from '@/types/rotors';



type RotorWrapperProps = {
    cx: number;
    cy: number;
    r: number;
    w: number;
    h: number;
    type: 'singleselect' | 'multiselect' | 'singleselect2';
    data: RotorType
}

const RotorWrapper:FC<RotorWrapperProps> = ({cx, cy, r, w, h, type, data}) => {

    if(type === 'singleselect2') {
        return (
            <RotorType2
                w={238}
                h={238}
                cx={119}
                cy={119}
                r={97.5}
                data={data}
            />
        )
    }

    return (
        <Rotor 
            cx={cx}
            cy={cy}
            r={r}
            w={w}
            h={h}
            data={data}
        />
    );
};

export default RotorWrapper;