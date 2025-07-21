import { useLocation } from "react-router-dom"
import { useLayoutEffect } from "react"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" }) // puedes cambiar a 'smooth'
    }, 50) // delay pequeño para esperar animación

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}