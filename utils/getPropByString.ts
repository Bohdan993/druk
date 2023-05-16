// export function getPropByString(obj: object, propString: string) {
//     if (!propString)
//       return obj;
  
//     let prop: string;
//     let props: string[] = propString.split('.');
//     let i: number = 0;
//     let iLen: number = props.length - 1;
  
//     for (; i < iLen; i++) {
//       prop = props[i];
  
//       let candidate: object = (obj as any)[prop];
//       if (candidate !== undefined) {
//         obj = candidate;
//       } else {
//         break;
//       }
//     }
//     return (obj as any)[props[i]];
//   }


type GetPropByStringResult = {
    res: number | string | object,
    additionalRes?: number
};

export function getPropByString(obj: object, props: string[]) : GetPropByStringResult {

    if (!props)
        return {res: obj};

    let res = 0;
    let additionalRes = 0;
    let objCopy = JSON.parse(JSON.stringify(obj));

    for(let i = 0; i < props?.length; i++) {

        if(props[i].startsWith('~')) {
            additionalRes += objCopy[props[i]];
        } 

        if(!(obj as any)[props[i]]) {
            continue;
        } else {
            if(typeof (obj as any)[props[i]] === 'number') {
                res = (obj as any)[props[i]];
            } else {
                obj = (obj as any)[props[i]];
                i = -1;
            }
        }
    }


    return Number(res) && (Number(res) > 0) ? {res, additionalRes} : {res: "Нажаль послуга не доступна"};

}