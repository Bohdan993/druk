type Icon = {
    src: string
}
export const makeTooltipMarkup = ({icon, tooltip}: {icon: Icon, tooltip: string}): string => {
    return `<span class="flex justify-between items-center py-[50px] px-[32px] md:p-[10px]"><img class="mr-[28px] md:mr-[10px]" src=${icon?.src} alt="Info Icon"/><span class="order-steps-tooltip-text font-[600] text-[1.1rem] md:text-[0.875rem] text-black md:text-black-2 leading-[1.2] tracking-[0.2em]">${tooltip}</span></span>`;
}