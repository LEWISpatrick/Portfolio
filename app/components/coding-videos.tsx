import Youtube from 'react-youtube'
import { Separator } from '@radix-ui/react-separator' 



export const CodingVideos = () => {
    const videoOption = {
        playerVars : {
            autoplay : 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 1,
            loop: 1,
            start: 5163,
            width: '480',
            height: '270',
            className: 'rounded-xl'
        }
    }
    return (
        <div className='text-center'>
            <h1 className='pb-4 font-bold tracking-tight text-5xl lg:text-6xl'>
                Videos of me coding
            </h1>
            <div className='flex items-center justify-center'>
                <Separator className='mt-3 bg-slate-100/20 h-0.5 w-40'/>
            </div>    

        <div className='flex justify-center'>
            <div className='mt-10 '>
                <Youtube opts={videoOption} videoId='nXmS4BvUk1k'/>

            </div>
        </div>

        </div>
    )
}