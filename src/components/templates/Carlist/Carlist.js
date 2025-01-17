import styles from './Carlist.module.css'
import Back from '../../icons/Back'
import useRouter from 'next/router'
import Card from '../../module/Card/Card'



function Carlist({data}) {
    const backHandler = () => {
        useRouter.back()
    }
    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map(car => {
                        return (
                            <Card key={car.id} {...car} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carlist