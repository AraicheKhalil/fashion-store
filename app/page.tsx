import Hero from "@/app/components/Hero";
import Newest from "@/app/components/Newest";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}