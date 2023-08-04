import LogoutButton from '../LogoutButton';
import Navbar from '../Navbar';
import styles from './styles.module.css';

function Header() {
    
    const clickHandler = () => {
        void console.log('Something');
    }

    return (
        <header className={styles.header}>
            <section className={styles.headerContent}>
                <div className={styles.titleContainer}>
                    <h3>FridaGPT Admin</h3>
                </div>
            </section>
            <section className={styles.navContent}>
                <Navbar />
            </section>
            <LogoutButton />
        </header>
    )
}

export default Header;