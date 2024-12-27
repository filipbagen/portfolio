import { Send } from 'lucide-react';

export default function Button() {
  return (
    <div
      className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer bg-[#251434] text-white group dark:bg-white/70 dark:text-[#251434] dark:hover:bg-white/80"
      aria-label="Contact me"
      onClick={() => (window.location.href = 'mailto:filip.bagen@gmail.com')}
    >
      <p className="font-bold">Contact me</p>
      <Send
        size={18}
        className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  );
}
