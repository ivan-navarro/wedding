import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsHeader } from './components/NewsHeader';
import { EventDetails } from './components/EventDetails';
import { Accommodation } from './components/Accommodation';
import { DressCode } from './components/DressCode';
import { Gifts } from './components/Gifts';
import { MusicRequests } from './components/MusicRequests';
import { RSVPForm } from './components/RSVPForm';
import { FinalMessage } from './components/FinalMessage';
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
        description: 'Disfruta de bebidas y aperitivos mientras capturamos con todos vosotros nuestros primeros momentos como marido y mujer.\nTambién los niños dispondrán de un espacio para jugar y divertirse.'
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
        <NewsHeader />
        <EventDetails venue={weddingDetails.venue} events={weddingDetails.events} weddingDate={weddingDetails.weddingDate} />
        <DressCode />
        <Accommodation brideFirstName={weddingDetails.brideFirstName} brideLastName={weddingDetails.brideLastName} groomFirstName={weddingDetails.groomFirstName} groomLastName={weddingDetails.groomLastName} />
        {/* <MusicRequests 
          googleFormUrl="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
          spotifyPlaylistUrl="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"
        /> */}
        <Gifts googleDriveUrl="https://drive.google.com/file/d/1Wl5UbZnWXzBvNIYU1RBC1MRzqiBO0_Ng/view?usp=drive_link" />
        <RSVPForm />
        <FinalMessage brideFirstName={weddingDetails.brideFirstName} groomFirstName={weddingDetails.groomFirstName} />
      </main>
      <Footer brideFirstName={weddingDetails.brideFirstName} groomFirstName={weddingDetails.groomFirstName} />
    </div>;
}