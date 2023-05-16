import { FaqItem } from './../types/faq';
const baseUrl:string = "http://localhost:1337/api";


type GetFaqsResponse = Promise<FaqItem[]>;

class FaqsApi {
    async getFaqs() : GetFaqsResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/faqs?fields[0]=active&fields[1]=answer&fields[2]=question`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const faqs = await res.json();
        
                if (!faqs) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(faqs?.data);

            } catch (err) {
                console.error('[Auth Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const faqsApi = new FaqsApi();
