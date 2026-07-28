import styles from './page.module.css';
import Card from "../components/Card/Card";
import Footer from '../components/Footer/Footer';
import recursos from "../data/recursos.json";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.homeSection}>
                    <div className={styles.tituloContainer}>
                        <h1>Next.js</h1>
                        <div className={styles.separador}></div>
                        <p>Pesquisa sobre o Next.js</p>
                    </div>
                    <div className={styles.introducaoContainer}>
                        <p>
                            O Next.js é um framework web de código aberto baseado em
                            React criado pela Vercel que adiciona estrutura,
                            renderização avançada e facilidades de SEO a aplicações.
                            Ele permite criar sites e sistemas completos (fullstack)
                            de forma rápida e organizada.
                        </p>
                    </div>
                    <div className={styles.recursosContainer}>
                        <h2 className={styles.h2Titulo}>
                            Principais Recursos
                        </h2>
                        <div className={styles.cards}>
                            {recursos.map((card) => (
                                <Card
                                    key={card.id}
                                    titulo={card.titulo}
                                    imagem={card.imagem}
                                    conteudo={card.conteudo}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.tabelaSection}>
                    <h2 className={styles.h2Titulo}>
                        React e Next.js
                    </h2>
                    <div className={styles.comparacao}>
                        <div className={styles.coluna}>
                            <h3>React</h3>

                            <ul>
                                <li>Biblioteca JavaScript.</li>
                                <li>Renderização no cliente (CSR) por padrão.</li>
                                <li>Roteamento com React Router.</li>
                                <li>Precisa de mais configurações.</li>
                                <li>SEO menos eficiente.</li>
                            </ul>
                        </div>

                        <div className={styles.coluna}>
                            <h3>Next.js</h3>

                            <ul>
                                <li>Framework baseado em React.</li>
                                <li>Suporta SSR, SSG, ISR e CSR.</li>
                                <li>Roteamento automático.</li>
                                <li>Otimizações integradas.</li>
                                <li>SEO otimizado.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
