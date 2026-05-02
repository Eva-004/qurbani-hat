import Banner from "@/components/homePage/Banner";
import FeaturedAnimals from "@/components/homePage/featuredAnimal/FeaturedAnimals";
import TipsAndBreeds from "@/components/homePage/TipsAndBreeds";


export default function Home() {
  return (
     <div>
      <Banner></Banner>
      <FeaturedAnimals></FeaturedAnimals>
      <TipsAndBreeds></TipsAndBreeds>
     
     </div>
  );
}
