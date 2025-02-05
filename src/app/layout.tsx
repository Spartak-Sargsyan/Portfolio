/** @format */

import '@styles/_reset.scss';
import Container from './components/Utils/Container';
import Header from './components/Feature/Header/Header';
import Footer from './components/Feature/Footer/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Container>
                    <Header />
                    {children}
                </Container>
                <Footer />
            </body>
        </html>
    );
}
