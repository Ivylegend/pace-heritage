import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site-data";
import { NewsletterForm } from "./NewsletterForm";

const footerHeading = "mb-4 text-base font-bold text-white";
const footerText = "text-sm leading-7 text-white/70";

export function Footer() {
  return (
    <footer
      className="bg-[radial-gradient(circle_at_74%_32%,rgba(17,166,232,0.22),transparent_26%),linear-gradient(125deg,#061832_0%,#021025_100%)] pt-16 pb-24 text-white md:pb-6"
      id="contact"
    >
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-9 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.8fr_1fr_1.35fr]">
        <div>
          <Image
            className="mb-4 h-12 w-[210px] object-cover object-left"
            src="/images/ph-logo.png"
            alt="Pace Heritage"
            width={370}
            height={74}
          />
          <p className={footerText}>
            Nigeria&apos;s leading ice cream manufacturing company supplying premium products to retailers
            and expanding distribution across Africa.
          </p>
        </div>
        <div>
          <h2 className={footerHeading}>Quick Links</h2>
          <ul className="grid gap-1.5">
            {navigation.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link className={footerText} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={footerHeading}>Products</h2>
          <ul className="grid gap-1.5">
            {["Retail ice cream", "Gelato", "Ice cream cones", "Dry mix", "Premix"].map((item) => (
              <li className={footerText} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={footerHeading}>Get in Touch</h2>
          <address className="grid gap-1.5 not-italic">
            <a className={footerText} href="tel:+2347065934811">
              07065934811
            </a>
            <a className={footerText} href="tel:+2347032328424">
              07032328424
            </a>
            <a className={footerText} href="mailto:info@paceheritage.com">
              info@paceheritage.com
            </a>
            <span className={footerText}>
              PaceHeritage Limited
              <br />
              Block C7, Lagos State Small Scale Industrial Scheme
              <br />
              Fatai Atere Way, Matori, Lagos
            </span>
            <span className={footerText}>Mon - Fri, 8:00 AM - 5:00 PM</span>
          </address>
        </div>
        <div>
          <h2 className={footerHeading}>Newsletter</h2>
          <p className={footerText}>
            Subscribe for product updates, manufacturing capacity news, and distribution opportunities.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-11 flex w-[min(1180px,calc(100%-40px))] flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/70 md:flex-row">
        <p>© 2026 Pace Heritage. All Rights Reserved.</p>
        <p>Privacy Policy · Terms & Conditions</p>
      </div>
    </footer>
  );
}
