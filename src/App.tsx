import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { AboutUs } from './components/AboutUs';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
export function App() {
  // Customizable wedding details - edit these to personalize the site
  const weddingDetails = {
    brideFirstName: 'Yuliana',
    brideLastName: '',
    groomFirstName: 'Ivan',
    groomLastName: '',
    weddingDate: new Date('2026-05-01T17:00:00'),
    venue: {
      name: 'Vil·la Minerva',
      address: 'Camí del Pla, 7, 08392 Barcelona',
      mapUrl: 'https://www.google.com/maps?sca_esv=730c08a984f2ad03&rlz=1C1GCEA_enCH1139CH1139&kgmid=/g/1tf7jrr7&shndl=30&shem=lcuae,uaasie,shrtsdl&kgs=4b5e75d570cea9c3&um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KdUAg-L6NbsSMc0odtGVATdY&daddr=Cam%C3%AD+del+Pla,+7,+08392+Barcelona'
    },
    events: [
      {
        name: 'Recepción',
        time: '17:00',
        description: 'Te damos la bienvenida y compartimos juntos el inicio de una noche inolvidable, al ritmo de la música con refrescantes bebidas'
      },
      {
        name: 'Ceremonia',
        time: '17:30',
        description: 'Acompáñanos a ser testigos de nuestro amor eterno mientras intercambiamos nuestros votos bajo el cielo abierto'
      },
      {
        name: 'Aperitivo',
        time: '18:30',
        description: 'Disfruta de bebidas y aperitivos mientras capturamos nuestros primeros momentos como marido y mujer con todos vosotros'
      },
      {
        name: 'Cena',
        time: '20:30',
        description: 'Comparte con nosotros una deliciosa cena rodeados de familia y amigos con algunas sorpresas especiales'
      },
      {
        name: 'Fiesta',
        time: '23:00',
        description: 'Prepárate para bailar y celebrar hasta el amanecer en nuestra gran fiesta'
      }
    ]
  };
  return <div className="min-h-screen font-sans text-gray-800 bg-neutral-50">
      <Header brideFirstName={weddingDetails.brideFirstName} groomFirstName={weddingDetails.groomFirstName} />
      <main>
        <Hero brideFirstName={weddingDetails.brideFirstName} groomFirstName={weddingDetails.groomFirstName} weddingDate={weddingDetails.weddingDate} />
        <EventDetails venue={weddingDetails.venue} events={weddingDetails.events} weddingDate={weddingDetails.weddingDate} />
        <AboutUs brideFirstName={weddingDetails.brideFirstName} brideLastName={weddingDetails.brideLastName} groomFirstName={weddingDetails.groomFirstName} groomLastName={weddingDetails.groomLastName} />
        <RSVPForm />
      </main>
      <Footer brideFirstName={weddingDetails.brideFirstName} groomFirstName={weddingDetails.groomFirstName} />
    </div>;
}