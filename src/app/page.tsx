import Hero from "./hero/page";
import HeroFooter from "@/components/HeroFooter";
import About from "./about/page";
import YoungsFavorite from "@/components/YoungsFavorite";
import Categories from "@/components/Categories";

export default function Home(){
  return(
    <>
      <Hero />
      <HeroFooter />
      <Categories />
      <YoungsFavorite />
      <About />

    </>
  )
}
