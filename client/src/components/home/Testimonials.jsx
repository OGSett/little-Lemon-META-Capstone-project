import { TestimonialsCard } from "../common/Cards";
import testimonialsData from "../../data/testimonials.json";

const Testimonials = () => {
    return ( 
        <section className="bg-[var(--secondary-bg)]" >
            <div className="testimonials-layout flex flex-col items-center justify-between max-w-7xl mx-auto px-4 py-16">
                <h1 className=" mb-0 mt-1 text-[64px]">What our customers say!</h1>
                <div className="testimonials-cards grid grid-cols-4 gap-10 mt-16 w-full">
                    {testimonialsData.testimonialsData.map((testimonial) => (
                        <TestimonialsCard
                            key={testimonial.id}    
                            name={testimonial.name}
                            review={testimonial.review}
                            rating={testimonial.rating}
                            image={testimonial.image}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Testimonials;