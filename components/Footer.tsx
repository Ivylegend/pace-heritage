import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/paceheritage-logo.png" alt="Pace Heritage" width={210} height={140} />
          <p>
            Nigeria&apos;s leading ice cream manufacturing company supplying premium products to retailers
            and expanding distribution across Africa.
          </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            {navigation.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            <li>Retail ice cream</li>
            <li>Gelato</li>
            <li>Ice cream cones</li>
            <li>Dry mix</li>
            <li>Premix</li>
          </ul>
        </div>
        <div>
          <h2>Get in Touch</h2>
          <address>
            <a href="tel:+2348031234567">+234 803 123 4567</a>
            <a href="mailto:info@paceheritage.com">info@paceheritage.com</a>
            <span>Lagos, Nigeria</span>
            <span>Mon - Fri, 8:00 AM - 5:00 PM</span>
          </address>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Subscribe for product updates, manufacturing capacity news, and distribution opportunities.</p>
          <form className="newsletter" aria-label="Newsletter signup">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" aria-label="Submit newsletter signup">
              →
            </button>
          </form>
        </div>
      </div>
      <div className="container footline">
        <p>© 2026 Pace Heritage. All Rights Reserved.</p>
        <p>Privacy Policy · Terms & Conditions</p>
      </div>
    </footer>
  );
}
