import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar/>
        
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded=full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded=full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong>Meteora 20th Anniversary Edition</strong>
              <button className='invisible group-hover:visible  w-12 h-12 flex items-center justify-center p-1 min-w-[48px] rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play/>
              </button>
            </a>
            
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Gabriel George <a className='underline' href="https://www.instagram.com/geeorg3___/" target='_blank'>@geeorg3___</a></h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>
                scelerisque felis imperdiet proin fermentum
              </span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>
                scelerisque felis imperdiet proin fermentum
              </span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>
                scelerisque felis imperdiet proin fermentum
              </span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>
                scelerisque felis imperdiet proin fermentum
              </span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' src="/album.jpg" width={104} height={104} alt="Capa do albúm Meteora da banda Link Park"/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>
                scelerisque felis imperdiet proin fermentum
              </span>
            </a>
          </div>

        </main>
      </div>
      
      <Footer/>

    </div>
  )
}
