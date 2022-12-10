import Link from 'next/link';
import MyHeader from './parts/MypageHeader.js';
import Footer from './parts/Footer.js';

export default function Mypage({title, children}) {
  return (
    <div class="bg-slate-200 mx-auto w-full md:w-1/2">
      <div class="h-screen">
        <MyHeader />

        <div class="">
          { title }
        </div>
        <div class="w-5/6 mx-auto my-5">
          { children }
        </div>

        <Footer />
      </div>
    </div>
  )
}
