import Link from 'next/link';
import Header from './Header.js';

export default function Mypage({title, children}) {
  return (
    <div class="bg-lime-100">
      <Header />

      <div class="mx-auto">
        { title }
      </div>
      <div>{ children }</div>
    </div>
  )
}
