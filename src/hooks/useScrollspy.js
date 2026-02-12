import { useEffect } from 'react'

export function useScrollspy(menuItems) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (entry.isIntersecting) {
            menuItems.forEach((item) => {
              document.querySelector(`a[href="#${item}"]`)?.classList.remove('active')
            })
            if (id && document.querySelector(`a[href="#${id}"]`)) {
              document.querySelector(`a[href="#${id}"]`).classList.add('active')
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    menuItems.forEach((item) => {
      const element = document.querySelector(`#${item}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [menuItems])
}

export function useIntersectionObserver(options = {}) {
  const ref = useEffect((element) => {
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, ...options })

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return ref
}
