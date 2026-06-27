import { useState, useEffect } from 'react'
import HomeButton from './HomeButton'
import type { ButtonData } from '../types/index.ts'
const photographyImages = [
  {
    url: '/images/home/SquareCosmiqueHut.webp',
    title: 'SquareCosmiqueHut',
    width: '100%'
  },
  {
    url: '/images/home/SquareDolomites.webp',
    title: 'Burgers',
    width: '100%'
  },
  {
    url: '/images/home/SquareItalyFromSlovenia.webp',
    title: 'Camera',
    width: '100%'
  },
  {
    url: '/images/home/SquareSlovenia.webp',
    title: 'Camera',
    width: '100%'
  },
  {
    url: '/images/home/SquareStBernard.webp',
    title: 'Camera',
    width: '100%'
  },
  {
    url: '/images/home/SquareSunset.webp',
    title: 'Camera',
    width: '100%'
  }
]

const productImages = [
  {
    url: '/images/home/SquareCatherineWriting.webp',
    title: 'Camera',
    width: '100%'
  },
    {
    url: '/images/home/SquareCatherineWriting.webp',
    title: 'Camera',
    width: '100%'
  }
]

function checkIsDesktop(): boolean {
  const mql = window.matchMedia('(min-width: 600px)')
  return mql?.matches
}

function useCheckIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(checkIsDesktop())
  // const [windowDimensions, setWindowDimensions] = useState(getMql())

  useEffect(() => {
    function handleResize(): void {
      setIsDesktop(checkIsDesktop())
    }

    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return isDesktop
}

export default function Home(): React.JSX.Element {
    const imagePicker = (randomizer = Math.random, multiplier: number): number => Math.floor(randomizer() * multiplier)
    const randomizer = Math.random
    const photographyImage = photographyImages[Math.floor(imagePicker(randomizer, photographyImages.length))]
    const productImage = productImages[Math.floor(imagePicker(randomizer, productImages.length))]
    const productButtonData: ButtonData = {
      href: '/software',
      label: 'Software'
    }
    const photographyButtonData: ButtonData = {
      href: '/photography',
      label: 'Photography'
    }

  return (
<div className={useCheckIsDesktop() ? "flex h-screen w-full" : "flex flex-col h-screen w-full"}>
  <div className={useCheckIsDesktop() ? "relative h-full w-1/2" : "relative w-full h-1/2"}>
    <img src={productImage.url} alt="Left" className="h-full w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
      {HomeButton(productButtonData)}
    </div>
  </div>

  <div className={useCheckIsDesktop() ? "relative h-full w-1/2" : "relative w-full h-1/2"}>
    <img src={photographyImage.url} alt="Right" className="h-full w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center">
    {HomeButton(photographyButtonData)}
    </div>
  </div>
</div>)
}
