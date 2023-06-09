
// @ts-ignore
import qs from 'qs';
import { baseUrlApi as baseUrl} from '@/constants';
import { TestimonialItem, Testimonial } from '../types/testimonial';
import { ITestimonialsingle } from './../strapitypes/Testimonialsingle';




type GetTestimonialsResponse = Promise<Testimonial[]>;
type PostTestimonialsResponse = Promise<TestimonialItem>;
type PostTestimonialRequest = TestimonialItem;
type GetTestimonialsSingleResponse = Promise<ITestimonialsingle>;

class TestimonialsApi {
    async getTestimonials() : GetTestimonialsResponse {
        const query = qs.stringify( 
            {   
                fields: ["createdAt", "name", "raiting", "review", "town"]
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/testimonials?${query}`, {
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
        
                const testimonials = await res.json();
        
                if (!testimonials) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(testimonials?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async postTestimonial(request: PostTestimonialRequest) : PostTestimonialsResponse {
        const {name, review, raiting, town} = request;
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/testimonials`, {
                method: "POST",
                // headers: {
                //         'Content-Type': 'application/json',
                //         'accept': 'application/json'
                //     },
                body: JSON.stringify(
                        {
                            "data": {
                                name,
                                review,
                                raiting,
                                town,
                                "locale": "uk-UA",
                                publishedAt: null
                            }
                        }
                    )
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
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }

    async getTestimonialsSingle() : GetTestimonialsSingleResponse  {
        const query = qs.stringify( 
            {
                populate: {
                    button: {
                        populate: {
                            image: true
                        }
                    },
                    button2: {
                        populate: {
                            image: true
                        }
                    }
                }
            },
            {
                encodeValuesOnly: true, // prettify URL
            }
        );
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`${baseUrl}/testimonialsingle?${query}`, {
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
        
                const testimonial = await res.json();
        
                if (!testimonial) {
                    reject(new Error('Виникла помилка при з\'єднання з сервером'));
                    return;
                }

               resolve(testimonial?.data);

            } catch (err) {
                console.error('[Api]: ', err);
                reject(new Error('Internal server error'));
            }
        });

    }
}

export const testimonialsApi = new TestimonialsApi();
