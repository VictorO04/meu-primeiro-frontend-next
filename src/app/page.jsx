import styles from './page.module.css';
import Card from "../components/Card/Card";

export default function Home() {
    const listaCards = [
        {
            id: 1,
            titulo: "Modos de Renderização",
            imagem: "/images/modos-renderizacao.png",
            conteudo: "SSR: gera no servidor a cada acesso. SSG: gera no build. ISR: atualiza páginas estáticas em segundo plano."
        },
        {
            id: 2,
            titulo: "Roteamento e Estrutura",
            imagem: "/images/roteamento.webp",
            conteudo: "Baseado em arquivos: pastas viram rotas automáticas. Rotas dinâmicas usam colchetes no nome da pasta (ex: [id])."
        },
        {
            id: 3,
            titulo: "Otimização e Desempenho",
            imagem: "/images/otimizacao.jpg",
            conteudo: "Server Components: rodam no servidor. Code Splitting: divide o JavaScript. Otimiza imagens e fontes de forma automática."
        }
    ]

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
                <div>
                    <h2 className={styles.recursosTitulo}>Principais Recursos</h2>
                </div>
                <div className={styles.cards}>
                    {listaCards.map(card => <Card key={card.id} titulo={card.titulo} imagem={card.imagem}  conteudo={card.conteudo} />)}
                </div>
            </section>

        </main>
    );
}
