import CarsPage from "../../components/templates/CarsPage/CarsPage";
import carsData from "../../data/carsData";
import Categories from '../../components/module/Categories/Categories'
export default function carDetails() {
    return (
        <div>
            <Categories />
            <CarsPage carsData={carsData} />
        </div>
    )
}
