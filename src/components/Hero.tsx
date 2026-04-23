import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="w-full md:h-[840px] h-[720px] p-4 flex justify-center items-center self-stretch md:rounded-4xl rounded-3xl bg-custom-gradient dark:bg-custom-gradient-dark">
      <div className="flex gap-10 flex-col md:flex-row items-center">
        <div className="relative w-56 h-56">
          <div className="absolute w-56 h-56 bg-blue-200 rounded-full -top-3"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="assets/profile.png"
              alt="Profile"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 max-w-[385px] md:items-start">
          <object data="assets/signature.svg" width="292" height="84" />
          <p className="text-center md:text-start pb-2">
            I am a <span className="font-semibold">creative and curious</span>{' '}
            full-stack developer working in{' '}
            <span className="font-semibold">Stockholm</span>, specializing in{' '}
            <span className="font-semibold">TypsScript, React</span>,
            with a deep interest in{' '}
            <span className="font-semibold">AI and Machine Learning</span>.
          </p>

          <Button />
        </div>
      </div>
    </div>
  );
}
