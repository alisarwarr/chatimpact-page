//NEXTJS
import localFont from 'next/font/local';
//STYLES
import '../style/globals.css';


const tiemposheadline = localFont({
    src: '../fonts/tiemposheadline.otf',
    variable: '--font-tiemposheadline'
});
const lexend = localFont({
    src: '../fonts/lexend.ttf',
    variable: '--font-lexend'
});


export const metadata = {
    title: 'Chat Impact',
    description: 'Website'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${tiemposheadline.variable} ${lexend.variable}`}> {children} </body>
        </html>
    )
}