import Link from "next/link";
import Container from "./container";

export default function Footer() {
  // Simulated footer data
  const footerSections = [
    {
      title: "ABOUT",
      links: [
        { text: "Our Story", href: "/about/story" },
        { text: "Sustainability", href: "/about/sustainability" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { text: "New Arrivals", href: "/products/new" },
        { text: "Best Sellers", href: "/products/best-sellers" },
        { text: "Collections", href: "/collections" },
        { text: "Sale", href: "/products/sale" },
      ],
    },
    {
      title: "CUSTOMER SERVICE",
      links: [
        { text: "Contact Us", href: "/contact" },
        { text: "Shipping & Returns", href: "/shipping-returns" },
        { text: "FAQ", href: "/faq" },
        { text: "Size Guide", href: "/size-guide" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M8 12l2 5 2-5m-7-2a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"></path>
          <path d="M12 8v4"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 font-poppins">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold tracking-[3px] mb-6">
              SHOPAHOLIC
            </h2>
            <p className="text-gray-600 mb-6">
              Elevating your style with sustainable, fashion-forward clothing
              that makes a statement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold tracking-[1.5px] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <span className="text-gray-600 hover:text-black transition-colors cursor-pointer text-sm">
                        {link.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-100 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-sm font-bold tracking-[1.5px] mb-2">
                SIGN UP FOR UPDATES
              </h3>
              <p className="text-gray-600 text-sm">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-black min-w-[240px]"
                aria-label="Email address"
              />
              <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row md:justify-between text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shopaholic. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy">
              <span className="hover:text-black transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service">
              <span className="hover:text-black transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/accessibility">
              <span className="hover:text-black transition-colors cursor-pointer">
                Accessibility
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
