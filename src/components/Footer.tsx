import Button from './ui/Button';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-custom-gradient-footer dark:bg-custom-gradient-footer-dark w-full rounded-t-[56px] p-16">
      <div className="flex flex-col gap-6 items-center text-center max-w-xl">
        <h1>Let's get in Touch</h1>
        <p>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <Button />
      </div>

      <div className="flex gap-6 items-center justify-center">
        <img src="public/assets/github.svg" alt="GitHub" className="h-8" />
        <img src="public/assets/linkedin.svg" alt="LinkedIn" className="h-8" />
      </div>
    </div>
  );
}
