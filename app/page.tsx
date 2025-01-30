import VideoCall from '@/components/VideoCall';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Video Calling App</h1>
        <VideoCall />
      </div>
    </main>
  );
}