import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import styles from './styles.module.css';

function Layout() {
    return (
        <div className={styles.mainLayout}>
            <Header />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;