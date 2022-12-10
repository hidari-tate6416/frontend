import Link from 'next/link';
import Header from './Header.js';

export default function Index({func, children}) {
  return (
    <button onClick={ func } class="bg-green-500 text-white w-2/3 mb-6 py-3">
      { children }
    </button>
  )
}
