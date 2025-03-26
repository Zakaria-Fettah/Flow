
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Updates', href: '#' },
        { label: 'Beta Program', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Partners', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Newsletter', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Support', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Licenses', href: '#' },
      ]
    }
  ];

  return (
    <footer className="border-t border-border">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                flow<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating beautiful, functional digital experiences with a focus on detail, elegance, and performance.
            </p>
            <div className="flex space-x-4">
              {/* Social icons - replace with your preferred icons */}
              {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/80 transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Flow Design. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Made with precision in a world of pixels
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
