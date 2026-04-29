
import '../styles/globals.css';
import WhatsAppButton from "../components/WhatsAppButton";
import AOSInitializer from '../components/AOSInitializer';

export const metadata = {
    title: {
        template: '%s | Hockey Academy',
        default: 'Hockey Academy'
    },
    description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
    keywords: 'Hockey Academy, Hockey, Campus, Campus Identity',
    icons: {
      icon: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/images/hockeyacademy_h_logo_16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '34x34', url: '/images/hockeyacademy_h_logo_34x34.png' },
        { rel: 'icon', type: 'image/png', sizes: '85x85', url: '/images/hockeyacademy_h_logo_85x85.png' },
        { rel: 'icon', type: 'image/png', sizes: '230x230', url: '/images/hockeyacademy_h_logo_230x230.png' },
        { rel: 'apple-touch-icon', sizes: '230x230', url: '/images/apple-touch-icon.png' },
      ],
    },
    metadataBase: new URL('https://hockeyacademy.cl'),
    openGraph: {
      title: 'Hockey Academy',
      description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
      type: 'website',
      siteName: 'Hockey Academy',
      locale: 'es_ES',
      images: [
        { url: '/hockeyacademycamp/hockeyacademycamp_ogimage.png', alt: 'Hockey Academy OG Image' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hockey Academy',
      description: 'Hockey Academy. Institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey.',
      images: ['/hockeyacademycamp/hockeyacademycamp_ogimage.png'],
    },
  };
  
export default function RootLayout({ children }) {

    return (

        <html lang="es" className={` scroll-smooth antialiased `} >
            <body className={` antialiased text-black bg-[#12214d] font-Cabin `} >
                <AOSInitializer />
                {children}

                <WhatsAppButton /> {/* 👈 aquí */}
            </body>

        </html>

    );
}
