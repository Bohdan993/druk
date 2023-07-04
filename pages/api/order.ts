// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const url: string = process.env.ADMIN_URL!;

async function login() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${url}admin/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email":  process.env.ADMIN_EMAIL,
                    "password": process.env.ADMIN_PASSWORD
                }),
                redirect: 'follow'
            });
    
            if(!res.ok && res.status!==200)
            {
                throw new Error(String(res.status));
            }
    
            const data = await res.json();

            if (!data) {
                reject(new Error('Виникла помилка при з\'єднання з сервером'));
                return;
            }

            resolve(data?.data?.token);

        } catch (err) {
            console.error('[Api]: ', err);
            reject(new Error('Internal server error'));
        }
    });
}

async function getOrder(id: number) {
    return new Promise(async (resolve, reject) => {
        try {
            const token = await login();
            const res = await fetch(url + `content-manager/collection-types/api::application.application/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'Authorization':  'Bearer ' + token
                }
            });
    
            if(!res.ok && res.status!==200)
            {
                throw new Error(String(res.status));
            }
    
            const data = await res.json();

            if (!data) {
                reject(new Error('Виникла помилка при з\'єднання з сервером'));
                return;
            }

            resolve(data);

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
            const result = await getOrder(req.body?.id);
            res.status(200).json({ data: result });
          } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'failed to load data' });
          }
    }

}
