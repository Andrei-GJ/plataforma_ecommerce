import Slider from "@/components/Slider";
import Categories from "@/components/Categories";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import NewsletterSubscription from "@/components/NewsletterSubscription";



export default function HomePage() {
  return (
    <>
      <Slider />
      <Categories />
      <ProductCarousel />
      <TestimonialsSlider />
      <NewsletterSubscription />
    </>
  );
}
