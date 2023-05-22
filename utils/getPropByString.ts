type GetPropByStringResult = {
    res: number | string | object,
    additionalRes?: number,
    coef?: number
};

export function getPropByString(obj: object, props: string[], quantity: number) : GetPropByStringResult {


    if (!props)
        return {res: obj};

    let propsForSort = [...props];
    let res = 0;
    let additionalRes = 0;
    let objCopy = JSON.parse(JSON.stringify(obj));
    let coef;
    
    for (let key in objCopy['EDITIONCOEFFS']) {
        if(key.includes("-")){
            const [start, end] = key.split("-");
            if(quantity >= +start && quantity <= +end) {
                coef = objCopy['EDITIONCOEFFS'][key];
                break;
            }
        } else {
            coef = objCopy['EDITIONCOEFFS'][key];
        }

    }

    propsForSort?.sort((a, b) => {
        if(a.startsWith('~')) {
            return 1;
        }
        if(b.startsWith('~')) {
            return -1;
        }
        return 0;
    });

    for(let i = 0; i < propsForSort?.length; i++) {

        if(propsForSort[i].startsWith('~')) {
            additionalRes += objCopy[propsForSort[i]];
        } 

        if(!(obj as any)[propsForSort[i]]) {
            continue;
        } else {
            if(typeof (obj as any)[propsForSort[i]] === 'number') {
                res = (obj as any)[propsForSort[i]];
            } else {
                obj = (obj as any)[propsForSort[i]];
                i = -1;
            }
        }
    }


    return Number(res) && (Number(res) > 0) ? {res, additionalRes, coef: coef || 1} : {res: "Нажаль послуга не доступна", coef: coef || 1};

}