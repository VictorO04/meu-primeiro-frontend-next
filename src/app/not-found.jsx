import styles from "./not-found.module.css";
import Link from "next/link";

export default function notFound() {
    return (
        <main className={styles.main}>
            <div className={styles.textosContainer}>
                <p>404</p>
                <p>Página não encontrada</p>
            </div>
            <Link className={styles.botao} href="/">Voltar para Home</Link>
        </main>
    );
}