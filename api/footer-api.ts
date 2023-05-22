// @ts-ignore
import qs from 'qs';
import { baseUrlApi as baseUrl} from '@/constants';


type GetFooterResponse = Promise<any>;

class FooterApi {
    async getFooter() : GetFooterResponse {

        const query = qs.stringify( 
            {
                populate: {
                    contact: {
                        populate: {
                            contactitem: {
                                populate: {
                                    image: true
                                }
                            },
                            contactsocial: {
                                populate: {
                                    image: true
                                }
                            }
                        }
                    },
                    social: {
                        populate: {
                            contactitem: {
                                populate: {
                                    image: true
                                }
                            },
                            contactsocial: {
                                populate: {
                                    image: true
                                }
                            }
                        }
                    },
                    privacy: {
                        populate: {
                            contactitem: {
                                populate: {
                                    image: true
                                }
                            },
                            contactsocial: {
                                populate: {
                                    image: true
                                }
                            }
                        }
                    },
                    logo: true

                }
                // populate: [
                //     "contact",
                //     "contact.contactitem",
                //     "contact.contactitem.image",
                //     "contact.contactsocial",
                //     "contact.contactsocial.image",
                //     "social",
                //     "social.contactitem",
                //     "social.contactitem.image",
                //     "social.contactsocial",
                //     "social.contactsocial.image",
                //     "privacy",
                //     "privacy.contactitem",
                //     "privacy.contactitem.image",
                //     "privacy.contactsocial",
                //     "privacy.contactsocial.image",
                //     "logo"
                // ],
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );

        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/footer?${query}`, {
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
        
                const footer = await res.json();
        
                if (!footer) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(footer?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const footerApi = new FooterApi();
