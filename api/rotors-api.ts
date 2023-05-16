import { Rotor } from './../types/rotors';
const baseUrl:string = "http://localhost:1337/api";


type GetRotorsResponse = Promise<Rotor[]>;

// type GetContactsRequest = {};

// type GetContactResponse = Promise<Contact>;

// type CreateContactRequest = Contact;


class RotorsApi {
    async getRotors() : GetRotorsResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/rotors?sort[0]=order:asc&fields[0]=title&fields[1]=type&populate[rotorpiece][populate][image][fields][0]=url&populate[rotorpiece][populate][image][fields][0]=width&populate[rotorpiece][populate][image][fields][0]=height&populate[rotorpiece][populate][image][fields][0]=name`, {
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
                console.error('[Auth Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const rotorsApi = new RotorsApi();
