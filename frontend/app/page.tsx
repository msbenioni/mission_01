import Hero from './components/Hero';
import Upload from './components/Upload';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <div id="upload-section" className="scroll-mt-16">
        <Upload />
      </div>
    </main>
  );
}
