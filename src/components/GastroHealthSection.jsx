import { gastroData } from "../data";

export default function GastroHealthSection() {
  const { title, description, image } = gastroData;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white mx-auto max-w-[1170px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Dogs eating"
            className="rounded-lg shadow-lg w-full max-w-[570px] h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-[570px] p-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold mb-4 tracking-[0.25px] leading-[120%]">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-[16px] font-normal tracking-[0.5px] leading-[150%]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
