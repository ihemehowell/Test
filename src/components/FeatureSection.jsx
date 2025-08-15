import { featuresData } from "../data";

export default function FeatureSection() {
  const { features, image } = featuresData;

  return (
    <section className="py-12 px-4 sm:px-6 text-center bg-white max-w-[1170px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 justify-center">
        
        {/* Left Features */}
        <div className="grid grid-cols-1 gap-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
          {features.slice(0, 2).map((f, i) => (
            <div key={i} className="text-left flex items-start gap-3">
              <img
                src={f.image}
                alt={f.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <img
          src={image}
          alt="Dog Food"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-full shadow-lg flex-shrink-0"
        />

        {/* Right Features */}
        <div className="grid grid-cols-1 gap-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
          {features.slice(2).map((f, i) => (
            <div key={i} className="text-left flex items-start gap-3">
              <img
                src={f.image}
                alt={f.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-base sm:text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
