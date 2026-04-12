
export const TestimonialsCard = ({ name, review, image, rating }) => {
  return (
    <div className="w-full rounded-lg bg-white shadow-md p-4 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <span className="text-yellow-500 text-sm font-semibold">
        {'★'.repeat(rating)}
      </span>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h3 className="text-md font-bold text-black">{name}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-6">
        {review}
      </p>
    </div>
  );
};



const SpecialCard = ({ title, price, description, image }) => {
  return (
    <div className="special-card w-full rounded-lg overflow-hidden bg-white shadow-md">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <span className="text-orange-500 font-semibold">${price}</span>
        </div>

        <p className="text-gray-600 text-sm leading-6">{description}</p>
        <div className="flex justify-start items-center mb-3 mt-4 hover:scale-102 hover:cursor-pointer transition-transform duration-200">
          <span className="">Order a delivery </span>
          <img className="mx-2" src="/delivery.svg" alt="delivery" />
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
