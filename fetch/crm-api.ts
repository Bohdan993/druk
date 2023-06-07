// import { baseUrlApi as baseUrl} from '@/constants';




// type GetCRMResponse = Promise<FaqItem[]>;
// type GetCRMSingleResponse = Promise<ICRMingle>;

// $data = [
//     "source_id" => 6,

//     "buyer_comment" => "Оплата: ".$PAY_SYSTEM.". Доставка: ".$DELIVERY,

//     "buyer" => [
//         "full_name"=> $user_arr['FIO'],
//         "phone"=> $user_arr['PHONE'],
//     ],

//     "shipping" => [
//         "shipping_address_city"=> $user_arr['ADDRESS']
//     ],

//         "payments" => [
//               "payment_method"=> $PAY_SYSTEM,
//        ],

//     "products"=> $products_arr
// ];

class CRMApi {
    async postCRM() {
        // const query = 'fields[0]=active&fields[1]=answer&fields[2]=question';
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`https://openapi.keycrm.app/v1/order`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    // 'Authorization:  Bearer ' + token
                },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const crm = await res.json();
        
                if (!crm) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(crm?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const crmApi = new CRMApi();
