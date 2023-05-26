// @ts-ignore
import qs from 'qs';
import { FaqItem } from '../types/faq';
import { baseUrlApi as baseUrl} from '@/constants';



type GetCluesResponse = Promise<FaqItem[]>;
type GetCluesSingleResponse = Promise<any>;

class CluesApi {
    async getClues() : GetCluesResponse {
        const query = qs.stringify( 
            {
                sort: ["order:asc"],
                populate: {
                    image: true,
                    clueslists: {
                        populate: "*"
                    }
                }
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/clues?${query}`, {
                method: "GET",
                // headers: {
                //     'Content-Type': 'application/json',
                //     'accept': 'application/json'
                // },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const clues = await res.json();
        
                if (!clues) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(clues?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async getCluesSingle() : GetCluesSingleResponse  {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/clues`, {
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
        
                const clues = await res.json();
        
                if (!clues) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(clues?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const cluesApi = new CluesApi();
