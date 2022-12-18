import Link from 'next/link';
import Header from './parts/Header.js';
import Footer from './parts/Footer.js';

export default function Index({title, children}) {
  return (
    <div class="bg-slate-200 mx-auto w-full md:w-1/2">
      <div class="flex flex-col h-screen">
        <Header />

        <div class="flex-grow">
          <div>
            { title }
          </div>
          <div>
            { children }
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
