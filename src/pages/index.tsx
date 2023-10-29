import { Inter } from 'next/font/google';
import Index from './Home';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <main className={` ${inter.className}`}>
         <Index />
      </main>
   );
}
