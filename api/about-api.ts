const baseUrl:string = "http://localhost:1337/api";


type GetAboutResponse = Promise<any>;

class AboutApi {
    async getAbout() : GetAboutResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/about?&populate[imagetextarea][populate][image][fields][0]=url&populate[imagetextarea][populate][image][fields][1]=width&populate[imagetextarea][populate][image][fields][2]=height&populate[imagetextarea][populate][image][fields][3]=name&populate[imagetextarea2][populate][image][fields][0]=url&populate[imagetextarea2][populate][image][fields][1]=width&populate[imagetextarea2][populate][image][fields][2]=height&populate[imagetextarea2][populate][image][fields][3]=name&populate[image]=image`, {
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
        
                const about = await res.json();
        
                if (!about) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(about?.data);

            } catch (err) {
                console.error('[Auth Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const aboutApi = new AboutApi();
