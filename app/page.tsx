import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import {
  distributionFeatures,
  featureStrip,
  manufacturingFeatures,
  products,
  retailers,
  stats,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="about">
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Nigeria&apos;s leading</p>
              <h1>
                Ice Cream <span>Manufacturing</span> Company
              </h1>
              <p>
                Supplying premium ice cream products to retailers nationwide and expanding
                distribution across Africa.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#contact">
                  Request Wholesale Quote
                  <span aria-hidden="true">→</span>
                </Link>
                <Link className="button button-ghost" href="#products">
                  View Our Products
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-stage reveal reveal-delay-1">
              <Image
                src="/images/hero-products.png"
                alt="Pace Heritage ice cream, cones, and dry mix products"
                width={1391}
                height={1131}
                priority
              />
            </div>
          </div>
          <div className="container trust-panel reveal reveal-delay-2">
            {featureStrip.map((feature) => (
              <div key={feature} className="trust-item">
                <span aria-hidden="true" />
                <strong>{feature}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="container">
            <SectionHeader
              title="Our Product Range"
              description="Premium products for retail, foodservice, manufacturing, and private-label growth."
            />
            <div className="product-grid">
              {products.map((product, index) => (
                <article
                  className="product-card reveal"
                  key={product.name}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={560}
                      height={430}
                      sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 31vw"
                    />
                  </div>
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section dark-section" id="manufacturing">
          <div className="split-media reveal">
            <Image
              src="/images/manufacturing-excellence.png"
              alt="Modern ice cream manufacturing facility with hygienic production equipment"
              width={1409}
              height={1117}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="split-copy reveal reveal-delay-1">
            <SectionHeader
              eyebrow="Manufacturing excellence"
              title="Built for Quality. Driven by Innovation."
              description="Our state-of-the-art manufacturing facility ensures the highest standards of quality, food safety, and consistency in every batch."
              light
            />
            <div className="icon-grid">
              {manufacturingFeatures.map((feature) => (
                <div key={feature} className="icon-stat">
                  <span aria-hidden="true" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <Link className="button button-primary" href="#contact">
              Explore Our Manufacturing
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section ingredients-section">
          <div className="container ingredients-grid">
            <div className="reveal">
              <SectionHeader
                eyebrow="Manufacturing ingredients"
                title="Reliable Inputs for Consistent Output."
                description="From dry mix to cones and premix solutions, Pace Heritage supports producers and foodservice operators with dependable ingredient formats."
              />
              <div className="stats-row">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ingredients-image reveal reveal-delay-1">
              <Image
                src="/images/manufacturing-ingredients.png"
                alt="Manufacturing ingredients including soft ice cream premix and cones"
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
          </div>
        </section>

        <section className="distribution-section" id="distribution">
          <div className="container distribution-grid">
            <div className="distribution-copy reveal">
              <SectionHeader
                eyebrow="Distribution across Africa"
                title="Expanding Horizons. Delivering Excellence."
                description="Pace Heritage supplies premium ice cream to retailers across Nigeria and is expanding into other African markets."
                light
              />
              <Link className="button button-ghost" href="#contact">
                Become a Distributor
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="map-wrap reveal reveal-delay-1">
              <Image
                src="/images/distribution-africa.png"
                alt="Distribution map highlighting Nigeria and expansion across Africa"
                width={1724}
                height={912}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            <div className="distribution-list reveal reveal-delay-2">
              {distributionFeatures.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section private-section" id="private-label">
          <div className="container private-grid">
            <div className="reveal">
              <SectionHeader
                eyebrow="Private label manufacturing"
                title="Your Brand. Our Expertise. Endless Possibilities."
                description="We help brands bring their vision to life with custom formulations, premium ingredients, and world-class manufacturing."
              />
              <Link className="button button-primary" href="#contact">
                Start Your Private Label Journey
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="private-images reveal reveal-delay-1">
              <Image
                className="badge"
                src="/images/anniversary-badge.png"
                alt="30 years since 1995 badge"
                width={1254}
                height={1254}
                sizes="160px"
              />
              <Image
                src="/images/product-private-label.png"
                alt="Private label ice cream packaging"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 90vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="retailers">
          <div className="container reveal">
            <p className="eyebrow">Trusted by leading retailers</p>
            <div className="retailer-row" aria-label="Retailer partners">
              {retailers.map((retailer) => (
                <span key={retailer}>{retailer}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Link className="whatsapp" href="https://wa.me/2348031234567" aria-label="Chat on WhatsApp">
        WA
      </Link>
    </>
  );
}
