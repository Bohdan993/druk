import { baseUrlApi as baseUrl} from '@/constants';
import { IApplication } from '../strapitypes/Application';



type PostOrderResponse = Promise<IApplication>;
type PostOrderRequest = any;

class OrderApi {
    async postOrder(request: PostOrderRequest) : PostOrderResponse {
        const {name, phonenum, phoneoperator, bookname = "", bookauthor = "", file = "", url = "", bounding, color, advancedservices, comment} = request;
        const data = {
            name, phonenum, phoneoperator, bookname, bookauthor, url, bounding, color, advancedservices, comment, locale: "uk-UA", publishedAt: null
        };

        const formData = new FormData();

        if(file) {
            formData.append(`files.file`, file as unknown as Blob, (file as unknown as Blob).name);
        }

        formData.append('data', JSON.stringify(data));
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/applications`, {
                    method: "POST",
                    body: formData
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const order = await res.json();
        
                if (!order) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(order?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const orderApi = new OrderApi();
