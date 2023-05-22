// @ts-ignore
import qs from 'qs';
import { Rotor } from './../types/rotors';
import { baseUrlApi as baseUrl} from '@/constants';


type GetRotorsResponse = Promise<Rotor[]>;

class RotorsApi {
    async getRotors() : GetRotorsResponse {
        const query = qs.stringify( 
            {   
                sort: ["order:asc"],
                populate: {
                    rotorpiece: {
                        populate: {
                            image: {
                                fields: ["url", "width", "height", "name"]
                            }
                        }
                    }
                },
                fields: ["title", "type"]
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );

        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/rotors?${query}`, {
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
        
                const rotors = await res.json();
        
                if (!rotors) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(rotors?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const rotorsApi = new RotorsApi();
