import { useWindowSize } from '@uidotdev/usehooks'

export default function useLargeScreen() {
  const { width } = useWindowSize()
  return Number(width) >= 1280
}
