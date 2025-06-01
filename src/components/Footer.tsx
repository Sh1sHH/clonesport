import React from 'react';
import { footerLinks, socialLinks } from '../data';
import Logo from './Logo';
import { Twitter, Instagram, Twitch, Youtube, Disc as Discord } from 'lucide-react';

// Map social media platform names to Lucide icons
const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'twitter':
      return <Twitter size={18} />;
    case 'instagram':
      return <Instagram size={18} />;
    case 'twitch':
      return <Twitch size={18} />;
    case 'youtube':
      return <Youtube size={18} />;
    case 'discord':
      return <Discord size={18} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              A professional esports organization competing at the highest level across multiple games. 
              Home to world-class players, passionate fans, and innovative gaming.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white font-oswald">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ESPORTS Organization. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-sm">
              Terms
            </a>
            <a href="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-sm">
              Privacy
            </a>
            <a href="/cookies" className="text-gray-500 hover:text-orange-500 transition-colors duration-200 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;