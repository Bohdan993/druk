// @ts-ignore
import qs from 'qs';
import { IGallerysingle } from '../strapitypes/Gallerysingle';
import { IGallery } from '../strapitypes/Gallery';
import { baseUrlApi as baseUrl} from '@/constants';




type GetGalleryResponse = Promise<IGallery[]>;
type GetGallerySingleResponse = Promise<IGallerysingle>;

class GalleryApi {
    async getGallery() : GetGalleryResponse {
        const query = qs.stringify( 
            {
                populate: {
                    image: true
                }
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );

        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/galleries?${query}`, {
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
        
                const gallery = await res.json();
        
                if (!gallery) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(gallery?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async getGallerySingle() : GetGallerySingleResponse  {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/gallerysingle`, {
                method: "GET",
                // headers: {
                //     'Content-Type': 'application/json',
                //     'accept': 'application/json'
                // },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const gallery = await res.json();
        
                if (!gallery) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(gallery?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const galleryApi = new GalleryApi();
