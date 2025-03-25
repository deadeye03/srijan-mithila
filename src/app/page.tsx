import { getSlideImages } from "@/sanity/queries";
import BrandSlide from "@/section/BrandSlide";
import HeroSlideSection from "@/section/HeroSlide-section";
import MovingMessages from "@/section/MovingMessage";


export default async function Home() {
  const images: SliderShowSchemaType = await getSlideImages();
  return (
    <main>
      <MovingMessages />
      <div className="bg-[#f6ffc1] px-3 slider-show md:px-16 py-4">
        <HeroSlideSection images={images.images} />
      </div>
      <div className=" px-3 slider-show md:px-16 py-4">
        <BrandSlide />
      </div>
    </main>
  );
}
