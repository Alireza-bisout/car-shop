import Carlist from '../../components/templates/Carlist/Carlist'
import { useRouter } from 'next/router'
import carsData from '@/data/carsData'

function carCategories() {
  const router = useRouter()
  const { carCategories } = router.query
  const carlist = carsData.filter(car => car.category === carCategories)

  return (
    <div><Carlist data={carlist} /></div>
  )
}

export default carCategories