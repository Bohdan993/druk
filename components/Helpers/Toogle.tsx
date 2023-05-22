import { useState, FC, ElementType, useEffect } from 'react';

type ToogleProps = {
    head: ElementType;
    content: ElementType;
}

export type ToogleHeadProps = {
    onClick: () => void;
    show: boolean
}

export type ToogleContentProps = {
    show: boolean
}

const Toogle: FC<ToogleProps> = (props) => {

    const [show, setShow] = useState(false);
    const {head: Head, content: Content} = props;


    return (
        <div>
            <Head onClick={() => setShow(prev => !prev)} show={show}/>
            <Content show={show}/>
        </div>
    );
};

export default Toogle;