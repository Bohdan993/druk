import { FileDimensions } from './../types/calculator-table';
import { baseUrlApi as baseUrl} from '@/constants';



type GetCalculatorTableResponse = Promise<FileDimensions>;

class CalculatorTableApi {

    async getCalculatorTable() : GetCalculatorTableResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/price-tavble`, {
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
        
                const priceTable = await res.json();
        
                if (!priceTable) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(priceTable?.data?.attributes?.table);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const calculatorTableApi = new CalculatorTableApi();
