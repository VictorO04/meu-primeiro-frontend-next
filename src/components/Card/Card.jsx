import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ titulo, imagem, conteudo }) {
    return (
        <article className={styles.cardContainer}>
            <h3>{titulo}</h3>
            <Image
                src={imagem}
                alt="foto conteúdo"
                width={100}
                height={100}
            />
            <p>{conteudo}</p>
        </article>
    );
}
