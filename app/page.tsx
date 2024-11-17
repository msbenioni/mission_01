import Hero from './components/Hero';
import Upload from './components/Upload';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Upload />
    </main>
  );
}
