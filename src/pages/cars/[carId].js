import CarDetails from "@/components/templates/CarDetails/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router"

function CarDetail() {
    const router = useRouter()
    const { carId } = router.query;
    const CarDetail = carsData[carId - 1]

    return <CarDetails {...CarDetail} />
}

export default CarDetail