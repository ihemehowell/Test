import { ctaData } from "../data";

export default function CTAButton() {
  const { buttonText, guaranteeText, paymentIcons, image } = ctaData;

  return (
    <div className="text-center max-w-[462px] mx-auto gap-4 bg-white">
      {/* Button */}
      <button className="bg-button hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg w-full">
        {buttonText}
      </button>

      {/* Guarantee + Payment Icons */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500 px-4">
        
        {/* Guarantee Section */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <img src={image} alt="shield" className="h-5 w-auto" />
          <span className="whitespace-nowrap">{guaranteeText}</span>
        </div>

        {/* Payment Icons */}
        <div className="flex gap-3 justify-center sm:justify-end flex-wrap">
          {paymentIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Payment Method"
              className="h-4 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
