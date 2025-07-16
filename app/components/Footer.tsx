import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 pb-15">
      <aside>
        <img src="/EZU-Red-White.png" className="w-15" alt="EZU Logo"></img>
        <p>
          © EZU Construction Inc.
          <br />
          All rights reserved. Proudly Canadian 🍁
        </p>
      </aside>
      <nav>
        <h3 className="footer-title">Get in Touch</h3>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://discordapp.com/users/591382265108627466"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/file.svg" alt="Discord" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/file.svg" alt="GitHub" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://twitter.com/_prmntr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/globe.svg" alt="Twitter" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://www.tiktok.com/@.prmntr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/file.svg" alt="TikTok" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://www.wechat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/file.svg" alt="Wechat" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://www.snapchat.com/web?ref=sign_in_sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/file.svg" alt="Snapchat" className="h-7 w-7 invert" />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/file.svg"
              alt="Mail"
              className="h-7 w-7 invert"
            />
          </Link>
        </div>
        <div className="grid grid-flow-col gap-4 pt-3">
          <Link className="hover:text-primary font-semibold" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-secondary font-semibold" href="/tos">
            Terms of Service
          </Link>
          <Link
            className="hover:text-accent font-semibold"
            href="/accessibility"
          >
            Accessibility
          </Link>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
