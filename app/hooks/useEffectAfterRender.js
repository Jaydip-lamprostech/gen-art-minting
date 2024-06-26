import { useEffect, useRef } from "react"

export const useEffectAfterRender = (
  effect,
  dependencies
) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
