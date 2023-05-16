import { TestimonialItem } from './../types/testimonial';
const baseUrl:string = "http://localhost:1337/api";


type GetTestimonialsResponse = Promise<TestimonialItem[]>;
type PostTestimonialsResponse = Promise<TestimonialItem>;

class TestimonialsApi {
    async getTestimonials() : GetTestimonialsResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/testimonials?fields[0]=active&fields[1]=answer&fields[2]=question`, {
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
        
                const testimonials = await res.json();
        
                if (!testimonials) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(testimonials?.data);

            } catch (err) {
                console.error('[Auth Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async postTestimonial() : PostTestimonialsResponse {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/testimonials?fields[0]=active&fields[1]=answer&fields[2]=question`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                })
        
                if(!res.ok && res.status!==200)
                {
                    throw new Error(String(res.status));
                }
        
                const testimonials = await res.json();
        
                if (!testimonials) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(testimonials?.data);

            } catch (err) {
                console.error('[Auth Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

}

export const testimonialsApi = new TestimonialsApi();
