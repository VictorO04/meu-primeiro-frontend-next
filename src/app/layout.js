import './globals.css';

export const metadata = {
    title: 'Pesquisa Next.js',
    description: 'Informações sobre o Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
