import { prebioticsData } from "../data";

export default function PrebioticsSection() {
  const { title, description, image } = prebioticsData;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1172px] mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <div className="max-w-full md:max-w-[570px] text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 tracking-[0.25px] leading-snug">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-[16px] font-normal tracking-[0.5px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Kibble"
            className="rounded-lg shadow-lg w-full max-w-[570px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
