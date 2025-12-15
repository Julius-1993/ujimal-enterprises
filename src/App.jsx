import { useState, useRef, useEffect } from "react";
import Clean1 from '../public/images/clean1.jpg'
import Clean2 from '../public/images/clean2.jpg'
import Clean3 from '../public/images/clean3.jpg'
import Clean4 from '../public/images/clean5.png'
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const WHATSAPP_NUMBER = '+2349070767695'
const EMAIL = 'ujimalenterprise@gmail.com'

export default function App() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^+0-9]/g, '')}`
  const mailLink = `mailto:${EMAIL}`
  const [isOpen, setIsOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null);
  const cardRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="min-h-screen bg-base-200">
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <a className="btn btn-ghost normal-case text-xl">UJIMAL Enterprise</a>

          {/* Hamburger button for mobile */}
          <button
            className="sm:hidden btn btn-ghost p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu links */}
          <div
            className={`flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 sm:flex ${isOpen ? 'flex' : 'hidden sm:flex'
              }`}
          >
            <a href="#services" className="btn btn-ghost w-full sm:w-auto">
              Services
            </a>
            <a href="#about" className="btn btn-ghost w-full sm:w-auto">
              About
            </a>
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <header
        className="hero min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] bg-[url('/images/clean1.jpg')] bg-cover bg-center relative "
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="hero-content relative text-center text-neutral container mx-auto px-4 mt-6">
          <div className="max-w-2xl bg-white/70 p-6 sm:p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral mb-4">
              UJIMAL Solar Energy Service
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Professional solar Energy services for homes, apartments, and offices. durable, friendly, reliable and powerful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success gap-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
              <a
                href={mailLink}
                className="btn btn-outline gap-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <CgMail />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-16 px-4">
        {/* Services */}


        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              img: Clean1,
              title: '1000W-2000W SOLAR GENERATOR',
              desc: 'Rated Power Output:1000watts -1800 Watts, Battery Capacity: 2048Wh (LiFePO₄ Battery/Lithuim Battery), Built-in Inverter: Pure Sine Wave (1.8kW continuous / 2.5kW peak), AC Output: 220V / 50Hz, DC Output Ports: 12V, USB-A, Type-C, Car Port',
              spec: 'Solar Input: Supports up to 500W solar panel, Recharge Options: Solar / AC wall / car charging, Charging Time: 5–6 hours (solar), Display: Digital screen for load and battery level, Weight: Approx. 20–25kg'
            },
            {
              img: Clean2, title: '3000W-5000W SOLAR GENERATOR',
              desc: 'Rated Power Output: 3000 Watts /5000 watts(3 kW/5kw), Battery Capacity: 5120 Wh (Lithium Iron Phosphate – LiFePO₄), Built-in Inverter: Pure Sine Wave (3 kW, 24V/48V system), AC Output: 220V / 50Hz, ',
              spec: 'DC Output Ports: 12V, USB-A, Type-C, and 16V DC outlets, Solar Input: Supports up to 600W solar panels, Recharge Options: Solar, wall socket (AC), or backup generator, Charging Time: 5–6 hours (solar), 4 hours (AC), Weight: Approx. 20–25kg'
            },
            {
              img: Clean3,
              title: 'SOLAR PANEL 300 Watts/750 watts',
              desc: 'Cell Type: Monocrystalline / Polycrystalline (depending on the manufacturer), Voltage at Maximum Power (Vmp): 36V – 40V/(Vmp): 40V – 44V, Current at Maximum Power (Imp): 8.3A – 8.5A/18.5A – 19A, Open Circuit Voltage (Voc): 44V – 46V/46V – 48V, Short Circuit Current (Isc): 9.2A – 9.5A/20A – 20.5A',
              spec: 'Module Efficiency: 17% – 19% (varies based on technology)/17% – 19%, Operating Temperature: -40°C to 85°C/-40°C to 85°C, Dimensions: Approx. 1640mm x 992mm x 40mm (varies slightly with manufacturer), Weight: Approx. 18-20 kg, Warranty: 10 years for product, 25 years for performance (often with 80% output at 25 years), Maximum System Voltage: 1000V or 1500V (depending on certification), Frame: Aluminum (corrosion-resistant)'
            },
            {
              img: Clean4,
              title: 'SOLAR PANEL 300 Watts/750 watts',
              desc: 'Cell Type: Monocrystalline / Polycrystalline (depending on the manufacturer), Voltage at Maximum Power (Vmp): 36V – 40V/(Vmp): 40V – 44V, Current at Maximum Power (Imp): 8.3A – 8.5A/18.5A – 19A, Open Circuit Voltage (Voc): 44V – 46V/46V – 48V, Short Circuit Current (Isc): 9.2A – 9.5A/20A – 20.5A',
              spec: 'Module Efficiency: 17% – 19% (varies based on technology)/17% – 19%, Operating Temperature: -40°C to 85°C/-40°C to 85°C, Dimensions: Approx. 1640mm x 992mm x 40mm (varies slightly with manufacturer), Weight: Approx. 18-20 kg, Warranty: 10 years for product, 25 years for performance (often with 80% output at 25 years), Maximum System Voltage: 1000V or 1500V (depending on certification), Frame: Aluminum (corrosion-resistant)'
            },
            ].map((service, index) => (
              <div
                key={index}
                ref={cardRef}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="card bg-white shadow hover:shadow-lg flex flex-col cursor-pointer transition-all duration-300"
              >
                <figure className="px-6 pt-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-lg font-semibold">
                    {service.title}
                  </h3>

                  {/* Short preview */}
                  <p className="text-sm text-gray-600">
                    {service.desc.slice(0, 120)}...
                  </p>

                  {/* Accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm text-gray-700 mt-2">
                      {service.desc}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      {service.spec}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4 items-center justify-center">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success btn-sm flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()} // prevent accordion toggle
                  >
                    For more inquiries <FaWhatsapp />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12" loading='lazy'>
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Portable Solar Generators?</h2>
          <ul className="list-disc pl-6 space-y-2 max-w-xl mx-auto text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-justify">
              At  Ujimal Solar Energy, we offer portable solar generators
              that are a game-changer compared to the traditional solar
              inverters you may be familiar with. Here’s why:
            </h3>
            <li className='text-justify'>
              Portability & Flexibility: Unlike regular solar inverters that are fixed systems,
              our portable solar generators are compact, lightweight, and easy to move.
              Whether you need power at home, during outdoor events, or in emergencies,
              you can take your generator wherever you go.
            </li>
            <li className='text-justify'>
              Self-contained Systems: Our portable solar generators come as complete,
              all-in-one systems, meaning you don’t need to worry about complex setups
              or additional equipment. They are ready to use straight out of the box.

            </li>
            <li className='text-justify'>
              Quick and Easy Setup: Simply plug your devices into the generator,
              and it’s ready to power your appliances. No need for professional installation
              it’s that simple!.
            </li>
            <li className='text-justify'>
              Environmentally Friendly: Powered by the sun, our solar generators are completely eco-friendly,
              helping you reduce your carbon footprint while providing clean, renewable energy.
            </li>
            <li className='text-justify'>
              Reliable Backup Power: Whether you're in need of backup power during a blackout or
              just want to cut your energy bills, our portable solar generators provide peace of
              mind with constant, reliable power.
            </li>
          </ul>
        </section>
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Who We Are?</h2>
          <p className="list-disc text-justify pl-6 space-y-2 max-w-xl mx-auto text-center sm:text-left">

            We are a team of renewable energy enthusiasts committed to revolutionizing
            the way you think about power. Our portable solar generators are built for versatility,
            convenience, and performance. We understand that every customer has unique needs,
            which is why we offer flexible, custom solutions that fit your energy requirements
            whether it’s for your home, business, or outdoor activities.

          </p>
        </section>
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Promise to You?</h2>
          <p className="list-disc pl-6 space-y-2 max-w-xl mx-auto sm:text-left text-justify">
            At Ujimal Solar Energy, we are committed to providing you with high-quality, durable, and efficient solar solutions.
            Our products are designed to meet your unique power needs, backed by excellent customer service, technical support,
            and a strong warranty policy. We believe in making renewable energy accessible to everyone whether you’re looking
            to power your home, business, or outdoor adventures. Our goal is to help you become energy independent, while contributing
            to a more sustainable planet.

            Let’s Power Your Future Together
            Explore our range of portable solar generators and experience the freedom of clean, reliable energy.
            If you’re ready to make the switch to solar power, or have any questions, don’t hesitate to contact us.
            Our team is here to guide you every step of the way.
          </p>
        </section>
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Portable Solar Generators vs. Traditional Solar Inverters?</h2>
          <p className="list-disc pl-6 space-y-2 max-w-xl mx-auto  sm:text-left text-justify">
            While traditional solar inverters are commonly used for larger, stationary solar panel setups,
            our portable solar generators offer a range of benefits that make them ideal for modern, flexible power solutions.

            Mobility: Regular solar inverters are typically fixed in one location, requiring installation and permanent wiring.
            Our portable solar generators, on the other hand, allow you to take your power wherever you go whether it's at home,
            in your office, or out camping.

            Compactness: Portable solar generators are much more compact and easier to store than standard solar inverters,
            which are often bulky and require larger installation spaces.

            Ease of Use: Unlike traditional solar inverters that need a complex setup,
            our generators are plug-and-play you simply charge them via solar panels,
            and you're ready to power your devices instantly.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Click an option below to start a conversation:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 btn btn-success w-full sm:w-auto">
              <FaWhatsapp />
              Message on WhatsApp
            </a>
            <a href={mailLink} className="flex items-center justify-center gap-3 btn btn-ghost w-full sm:w-auto">
              <CgMail />
              Send an Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-base-300 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold">UJIMAL Solar Energy Service</h3>
            <p className="text-sm">Making your home,office, appartment shine since 2025.</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost">
              <FaWhatsapp />
            </a>
            <a href={mailLink} className="btn btn-circle btn-ghost">
              <CgMail />
            </a>
          </div>
          <div className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved by AJ-Tech Innovative Afrika.</div>
        </div>
      </footer>
    </div>
  )
}