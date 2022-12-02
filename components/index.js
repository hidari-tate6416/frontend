import Link from 'next/link';
import Header from './Header.js';
import Footer from './Footer.js';

export default function Index({title, children}) {
  return (
    <div class="">
      <div class="bg-slate-200 mx-auto w-full md:w-1/2">
        <Header />

        <div>
          { title }
        </div>
        <div>{ children }</div>

        <Footer />
      </div>
    </div>
  )
}
