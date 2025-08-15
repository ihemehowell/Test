import { nutritionData } from "../data";

export default function NutritionSection() {
  const { title, description, stats, buttonText, image } = nutritionData;

  return (
    <section className="py-12 px-4 sm:px-6 gap-8 items-center bg-gray-100 mt-10">
      <div className="grid md:grid-cols-2 max-w-[1170px] mx-auto gap-8 md:gap-12">
        
        {/* Text Content */}
        <div className="px-2 sm:px-3">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-4 leading-snug tracking-[0.25px]">
            {title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-normal tracking-[0.5px] leading-relaxed mb-6">
            {description}
          </p>

          {/* Stats List */}
          <ul className="space-y-4 text-gray-700">
            {stats.map((stat, index) => (
              <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 py-3">
                <h4 className="font-semibold text-base sm:text-lg">{stat.title}</h4>
                <strong className="text-2xl sm:text-[33px] text-button">{stat.percent}</strong>
                <p className="text-gray-600 text-sm sm:text-base font-normal tracking-[0.5px] leading-relaxed">
                  {stat.text}
                </p>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="w-full sm:w-auto mt-6 bg-button hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={image}
            alt="Happy Dog"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[570px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
