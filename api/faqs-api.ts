import { FaqItem } from './../types/faq';
import { baseUrlApi as baseUrl} from '@/constants';



type GetFaqsResponse = Promise<FaqItem[]>;
type GetFaqsSingleResponse = Promise<any>;

class FaqsApi {
    async getFaqs() : GetFaqsResponse {
        const query = 'fields[0]=active&fields[1]=answer&fields[2]=question';
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/faqs?${query}`, {
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
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async getFaqsSingle() : GetFaqsSingleResponse  {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/faqs`, {
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
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const faqsApi = new FaqsApi();
