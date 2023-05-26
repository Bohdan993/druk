import { IClue } from '@/strapitypes/Clue';
type Icon = {
    src: string
}

type List = IClue['attributes']['clueslists'];

export const makeTooltipMarkup = ({icon, tooltip, list}: {icon: Icon, tooltip: string | null, list: List}): string => {
    if(!list?.length) {
        return `<span class="flex justify-between items-center py-[50px] px-[32px] md:p-[10px]"><img class="clue-info-icon mr-[28px] md:mr-[10px]" src=${icon?.src} alt="Info Icon"/><span class="order-steps-tooltip-text font-[600] text-[1rem] md:text-[0.875rem] text-black md:text-black-2 leading-[1.2] tracking-[0.2em]">${tooltip}</span></span>`;
    } else {
        let root = list?.[0];
        if(root?.__component === "clues.cluelist"){
            return `
            <span class="flex justify-between items-center py-[50px] px-[32px] md:p-[10px]">
            <img class="clue-info-icon mr-[28px] md:mr-[10px]" src=${icon?.src} alt="Info Icon"/>
            <span class="border-natural-green border-[1px] p-[10px] rounded-[20px] bg-skin-light">
                <span class="text-natural-green leading-[1.2] tracking-[0.2em] font-[600] mb-[10px] block text-[1rem] md:text-[0.875rem] order-steps-tooltip-text">${root?.title}</span>
                <ul>
                    ${root?.clueitem?.map(el => {
                        return "<li class='text-black-2 clue-inner-item leading-[1.2] tracking-[0.2em] font-[600] mb-[10px] last:mb-[0] text-[1rem] md:text-[0.875rem] order-steps-tooltip-text'>" + el?.clueitemtext + "</li>";
                    }).join('')}
                </ul>
            </span>
            </span>`
        } else if(root?.__component === "clues.clueslists2"){
            return `<span class="flex justify-between items-center py-[50px] px-[32px] md:p-[10px]">
            <img class="clue-info-icon mr-[28px] md:mr-[10px]" src=${icon?.src} alt="Info Icon"/>
            <ul>
                ${root?.clueslists2?.map(el => {
                    return "<li class='text-black-2 clue-inner-item leading-[1.2] tracking-[0.2em] font-[600] mb-[10px] last:mb-[0] text-[1rem] md:text-[0.875rem] order-steps-tooltip-text bg-white-glass border-natural-green border-[1px] rounded-[20px] p-[10px] font-[600]'>" + el?.clueitemtext + "</li>";
                }).join('')}
            </ul>
            </span>`;
        }
    }
    
    return '';
}