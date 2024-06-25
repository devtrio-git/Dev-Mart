import PageLayout from '../../components/layouts/page-layout';
import SectionHeading from '../../components/section-headings/section-heading';
import BestProductSlider from '../../components/sliders/best-product-slider';
import { singleProduct } from '../../services/single-data';
import styles from './product-info.module.scss';
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductInfoPage = () => {

    console.log(singleProduct);
    return (
        <PageLayout>

            <section className={`container my-5 py-5`}>
                <div className="row">
                    <div className="col-lg-7">
                        <div className={styles.product_images_container}>
                            <figure>
                                <img src={singleProduct.images?.[0]} alt="product feature image" />
                            </figure>
                            <div className={styles.product_images_slider_container}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={160}
                                    breakpoints={{
                                        0: { slidesPerView: 2, spaceBetween: 20 },
                                        768: { slidesPerView: 3, spaceBetween: 20 },
                                        992: { slidesPerView: 5, spaceBetween: 30 },
                                        1200: { slidesPerView: 6, spaceBetween: 30 },
                                    }}
                                    className="mySwiper"
                                >
                                    {singleProduct.images.map((src, key) => (
                                        <SwiperSlide key={key} className='d-flex justify-content-center'>
                                            <img className={styles.product_other_images} src={src} alt="other images of product" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                </div>
            </section>




            {/* Related Products */}
            <section className={`${styles.best_product_section} container my-5 py-5`}>
                <SectionHeading title={"Explore More"}>Related Items</SectionHeading>
                <BestProductSlider />
            </section>
        </PageLayout>
    )
}

export default ProductInfoPage
