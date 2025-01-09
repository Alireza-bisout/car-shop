import styles from './Layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'>
                    <h2>Car Shop</h2>
                    <p>choose an buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <p>&copy; 2024 Car Shop</p>
            </footer>
        </>
    )
}
