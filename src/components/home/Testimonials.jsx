import { TestimonialsCard } from "../common/Cards";
import testimonialsData from "../../data/testimonials.json";

const Testimonials = () => {
  return (
    <div
      className="bg-[var(--secondary-bg)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials-layout flex flex-col items-center justify-between max-w-7xl mx-auto px-4 py-16">
        <h2
          id="testimonials-heading"
          className="mb-0 mt-1 text-[42px] md:text-[64px]"
        >
          What our customers say!
        </h2>

        <div className="testimonials-cards grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 mt-16 w-full">
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
    </div>
  );
};

export default Testimonials;
