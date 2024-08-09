import { Metadata } from 'next';
import Homepage from './components/Homepage';

export const metadata: Metadata = {
  title: 'Zamrood by Asher Azriel Ginting',
  description: 'Frontend test',
  icons: {
    icon: '/favicon.png',
  },
};

export default function HomePage() {
  return (
    <div>
      <Homepage />
    </div>
  );
}
