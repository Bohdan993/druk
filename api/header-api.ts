// @ts-ignore
import qs from 'qs';
import { IHeader } from './../strapitypes/Header';
import { baseUrlApi as baseUrl} from '@/constants';


type GetHeaderResponse = Promise<IHeader>;

class HeaderApi {
    async getHeader() : GetHeaderResponse {

        const query = qs.stringify( 
            {
                populate: {
                    social: {
                        populate: {
                            image: true
                        }
                    },
                    menu: {
                        populate: {
                            image: true
                        }
                    },
                    logo: true
                }
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );

        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/header?${query}`, {
                method: "GET",
                // headers: {
                //         'Content-Type': 'application/json',
                //         'accept': 'application/json',
                //         'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
                //     },
                });

                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const header = await res.json();

                if (!header) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }
                
               resolve(header?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const headerApi = new HeaderApi();
