
import { Inter } from 'next/font/google';
import Header from './Home/Header/Header';
import Hero from './Home/Hero/Hero';
import Affordable from './Home/Affordable/Affordable';
import Ready from './Home/Ready/Ready';
import Unique from './Home/Unique/Unique';
import Testimony from './Home/Testimony/Testimony';
import Counter from './Home/Counter/Counter';
import TrendingSlider from '@/components/Slider/TrendingSlider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <main className={` ${inter.className}`}>
         <Header/>
         <Hero />
         <Affordable/>
         <Ready/>
         <Unique/>
         <Testimony/>
         <Counter />
         <TrendingSlider/>
      </main>
   );
}
