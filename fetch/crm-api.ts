import { CRMData } from '@/types/crm';


class CRMApi {
    async postCRM(data: CRMData) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`/api/crm`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data?.name || "",
                        bounding: data?.bounding,
                        color: data?.color,
                        comment: data?.comment || "",
                        advancedservices: data?.advancedservices || "",
                        phonenum: data?.phonenum || "",
                        phoneoperator: data?.phoneoperator || "",
                        url: data?.url || "",
                        file: data?.file || "",
                        bookname: data?.bookname || "", 
                        bookauthor: data?.bookauthor || ""
                    })
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const crm = await res.json();
        
                if (!crm) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(crm?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const crmApi = new CRMApi();
