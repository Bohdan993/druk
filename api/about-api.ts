// @ts-ignore
import qs from 'qs';
import { IAbout } from './../strapitypes/About';
import { baseUrlApi as baseUrl} from '@/constants';



type GetAboutResponse = Promise<IAbout>;

class AboutApi {
    async getAbout() : GetAboutResponse {
        const query = qs.stringify( 
            {
                populate: {
                    imagetextarea: {
                        populate: {
                            image: {
                                fields: ["width", "url", "height", "name"]
                            }
                        }
                    },
                    imagetextarea2: {
                        populate: {
                            image: {
                                fields: ["width", "url", "height", "name"]
                            }
                        }
                    },
                    image: true

                }
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/about?${query}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
                },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const about = await res.json();
        
                if (!about) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(about?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const aboutApi = new AboutApi();
