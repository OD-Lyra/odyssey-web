export default function WatchVideoPage({
  params
}: {
  params: { videoId: string };
}) {
  return (
    <main className="min-h-screen bg-[#020202] px-8 py-16 text-zinc-100">
      <h1 className="font-label text-xs font-bold uppercase tracking-[0.5em] text-white/80">
        Cinematic Player
      </h1>
      <p className="mt-6 text-sm text-white/60">
        Watch video: <span className="text-white">{params.videoId}</span>
      </p>
    </main>
  );
}

