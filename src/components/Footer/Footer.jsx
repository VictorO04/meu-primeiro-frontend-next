import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Feito pelo Victor para a aula de Frontend 2</p>
            <a href="https://github.com/VictorO04" target="_blank">Ver Github</a>
        </footer>
    )
}