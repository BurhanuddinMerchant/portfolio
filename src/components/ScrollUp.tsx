import { useState, useEffect } from 'react'
import UpSVG from "../assets/icons/misc/up.svg"

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button
      className={`${
        visible ? 'scroll-btn-visible' : 'scroll-btn-hidden'
      } fixed bottom-5 right-5 rounded-full bg-red-600 hover:bg-red-500 scroll-btn`}
    >
      <img
        src={UpSVG}
        onClick={scrollToTop}
      />
    </button>
  )
}

export default ScrollButton
