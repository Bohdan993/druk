// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CRMData } from './../../types/crm';



async function postCRM(data: CRMData) {
    const token: string = 'MzNjMWFiNmVjNDFlNGU5MzExNDNlNTAxMmU2YmY4MDYyNmU0NGZmMA';
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`https://openapi.keycrm.app/v1/order`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization':  'Bearer ' + token
                },
                body: JSON.stringify({
                    "source_id": 1,
                    "buyer_comment": data?.comment,
                    "buyer": {
                        "full_name": data?.name,
                        "phone": data?.phonenum,
                    },
                    "custom_fields": [
                        {
                            "uuid": "OR_1001",
                            "value": data?.file || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1002",
                            "value": data?.url || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1003",
                            "value": data?.bounding || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1004",
                            "value": data?.color || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1005",
                            "value": data?.advancedservices || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1006",
                            "value": data?.phoneoperator || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1007",
                            "value": data?.bookname || 'Немає даних'
                        },
                        {
                            "uuid": "OR_1008",
                            "value": data?.bookauthor || 'Немає даних'
                        },
                    ]
                })
            });
    
            if(!res.ok && res.status!==200)
            {
                throw new Error(String(res.status));
            }
    
            const crm = await res.json();

            

            if (!crm) {
                reject(new Error('Виникла помилка при з\'єднання з сервером'));
                return;
            }

            resolve(crm);

        } catch (err) {
            console.error('[Api]: ', err);
            reject(new Error('Internal server error'));
        }
    });

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const result = await postCRM(req.body);
            res.status(200).json({ data: result });
          } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'failed to load data' });
          }
    }
}
