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
      }`}
    >
      <img
        src={UpSVG}
        onClick={scrollToTop}
        alt="up"
      />
    </button>
  )
}

export default ScrollButton
