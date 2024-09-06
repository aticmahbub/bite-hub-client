import { useEffect, useState, useRef } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle heading='Testimonials' subheading='See what our client says' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map((review, idx) => (
                        <SwiperSlide
                            key={idx}
                        >
                            <div className='flex flex-col items-center justify-center mx-24 my-16'>
                                <p className='py-8'>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;