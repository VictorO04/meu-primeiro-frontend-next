import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.container}>
            <section className={styles.tituloContainer}>
                <h1>Next.js</h1>
                <div className={styles.separador} />
                <p>pesquisa sobre o Next.js</p>
            </section>
            <section className={styles.introducaoContainer}>
                <p>O Next.js é um framework web de código aberto baseado em React criado pela Vercel que adiciona estrutura, renderização avançada e facilidades de SEO a aplicações. Ele permite criar sites e sistemas completos (fullstack) de forma rápida e organizada.</p>
            </section>
            <section className={styles.recursosContainer}>
                <p className={styles.recursosTitulo}>Principais Recursos</p>
            </section>
        </main>
    );
}
