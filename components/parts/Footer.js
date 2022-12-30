import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
  return (
    <div class="bg-slate-800 pt-4 pb-1 w-full">
      <footer>
        <div class="flex justify-between max-w-5xl mx-3 text-white">
          <div>
            <span class="text-xs">Analoggame Renjoy Tool</span>
          </div>
          <div class="invisible">
            <Link href="/about" class="mx-3 text-xs">
              サイトについて
            </Link>
            <Link href="/contact" class="text-xs">
              お問い合せ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
