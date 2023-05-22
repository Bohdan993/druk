export const formatDate = (datestring: string, includeYears: boolean = true) => {

    const date = new Date(datestring);
    const day: string | number = date.getDate();
    const month: string | number = date.getMonth() + 1;
    const year: string | number = date.getFullYear();

    return includeYears ? (day < 10 ? "0" + day : day) + '.' +  (month < 10 ? "0" + month : month) + '.' + year : (day < 10 ? "0" + day : day) + '.' +  (month < 10 ? "0" + month : month);
}