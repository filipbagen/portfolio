import { Send } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full h-[840px] flex justify-center items-center self-stretch rounded-[56px] bg-custom-gradient">
      <div className="flex gap-10">
        <div className="relative w-56 h-56">
          <div className="absolute w-56 h-56 bg-blue-200 rounded-full -top-3"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="src/assets/profile.png"
              alt="Profile"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 w-[385px]">
          <object data="src/assets/signature.svg" width="292" height="84" />
          <p>
            I am a <span className="font-semibold">creative and curious</span>{' '}
            tech geek, in the M.Sc. program in Computer Science, with a major in{' '}
            <span className="font-semibold">ML and Web Development</span>
          </p>

          <div className="w-32 h-0.5 bg-black/10 rounded-full" />

          <div
            className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-[#251434]/5 group"
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
      </div>
    </div>
  );
}
