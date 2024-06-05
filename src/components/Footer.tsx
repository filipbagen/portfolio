import Button from './ui/Button';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center md:gap-16 gap-12 bg-custom-gradient-footer dark:bg-custom-gradient-footer-dark w-full md:rounded-t-[56px] rounded-t-3xl md:p-16 py-12 px-8">
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
        <a href="https://github.com/filipbagen">
          <img src="assets/github.svg" alt="GitHub Profile" className="h-8" />
        </a>

        <a href="https://www.linkedin.com/in/filipbagen/">
          <img
            src="assets/linkedin.svg"
            alt="LinkedIn Profile"
            className="h-8"
          />
        </a>
      </div>
    </div>
  );
}
