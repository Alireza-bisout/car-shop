import Card from '../../module/Card/Card'
import styles from './CarsPage.module.css'

function CarsPage({ carsData }) {
    return (
        <div className={styles.container}>
                {carsData.map((car) => {
                    return (
                        <Card key={car.id} {...car} />
                    )
                })}

        </div>
    )
}

export default CarsPage