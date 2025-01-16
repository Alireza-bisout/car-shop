import Location from '@/components/icons/Location'
import styles from './Card.module.css'
import Link from 'next/link'

function Card(props) {
    const { id, name, model, year, distance, location, image, price } = props
    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} className={styles.image} alt={name} />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.detail}>{`${year} . ${distance}km`}</p>
                <div className={styles.footer}>
                    <p className={styles.price}>$ {price}</p>
                    <div className={styles.location}>
                        <p>
                            {location}
                            <Location />
                        </p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card