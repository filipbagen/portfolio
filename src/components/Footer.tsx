import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-custom-gradient-footer w-full rounded-t-[56px] p-16">
      <div className="flex flex-col gap-6 items-center text-center max-w-xl">
        <h1>Let's get in Touch</h1>
        <p>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div
          className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer bg-[#251434] text-white group"
          onClick={() =>
            (window.location.href = 'mailto:filip.bagen@gmail.com')
          }
        >
          <p className="font-semibold">Contact me</p>
          <Send
            size={18}
            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>

      <div className="flex gap-6 items-center justify-center">
        <img src="src/assets/github.svg" alt="GitHub" className="h-8" />
        <img src="src/assets/linkedin.svg" alt="LinkedIn" className="h-8" />
      </div>
    </div>
  );
}
