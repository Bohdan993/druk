import { Towns } from './../types/towns';
import { baseUrlApi as baseUrl} from '@/constants';


type GetTownsResponse = Promise<Towns>;

class TownsApi {

    async getTowns() : GetTownsResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/tabliczya-mist`, {
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
        
                const townsTable = await res.json();
        
                if (!townsTable) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(townsTable?.data?.attributes?.towns);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const townsApi = new TownsApi();
