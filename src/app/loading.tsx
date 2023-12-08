import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>
  <Skeleton /> // Simple, single-line loading skeleton
<Skeleton count={50} /> // Five-line loading skeleton
  </>
}