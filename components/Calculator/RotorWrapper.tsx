import { FC, useEffect } from 'react';
import Rotor from './Rotor';
import RotorType2 from './RotorType2';
import { Rotor as RotorType } from '@/types/rotors';
import { selectRotorsState, setActiveRotorsKeys } from "@/slices/rotors";
import { useAppDispatch, useAppSelector } from "@/store";




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

    const rotorsState = useAppSelector<RotorType[]>(selectRotorsState);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      const activeRotorsKeys = rotorsState?.map(rotor => {
          return rotor.attributes.rotorpiece.map(rp => {
            if(rp?.active) {
              return rp?.key;
            }
            return '';
          }).filter(Boolean);
      }).filter(Boolean).flat();
      dispatch(setActiveRotorsKeys(activeRotorsKeys));
    }, [dispatch, rotorsState]);

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