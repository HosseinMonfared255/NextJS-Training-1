import Link from "next/link";

function HeroBanner({ imageUrl, imageAlt, title, description, buttonText, buttonLink }) {
    return (
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="relative h-[240px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
          <div className="absolute bottom-6 right-6 left-6 text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3">
              {title}
            </h1>
            <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-white/90 mb-5">
              {description}
            </p>
            <Link
              href={buttonLink}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:bg-blue-700 transition"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroBanner;