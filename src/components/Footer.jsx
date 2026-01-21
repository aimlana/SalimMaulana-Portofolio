import { Instagram, MessageCircleMore, Mail } from 'lucide-react';

const Footer = () => {
  const contactLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/salim.mlana/',
      icon: Instagram,
      color: 'hover:text-[#E4405F]',
      hoverColor: 'group-hover:fill-[#E4405F]'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/6282189172246?text=Hello%20Salim!%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20collaborating%20with%20you%20on%20a%20project.',
      icon: MessageCircleMore,
      color: 'hover:text-[#25D366]',
      hoverColor: 'group-hover:fill-[#25D366]'
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:salim.yaklu@gmail.com',
      icon: Mail,
      color: 'hover:text-[#EA4335]',
      hoverColor: 'group-hover:fill-[#EA4335]'
    }
  ];

  const handleContactClick = (platform, url) => {
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="container mx-auto px-5 md:px-12 lg:px-13">
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h2 className="font-alumni text-4xl md:text-5xl lg:text-6xl text-white text-center mb-8 md:mb-12">
            Let&apos;s Work Together
          </h2>
          
          {/* Social Icons */}
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-8 md:mb-12">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <button
                  key={contact.id}
                  onClick={() => handleContactClick(contact.name, contact.url)}
                  className="group relative cursor-pointer"
                  aria-label={`Contact via ${contact.name}`}
                >
                  <div className="relative">
                    {/* Background Circle */}
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Icon */}
                    <Icon
                      size={32}
                      className={`
                        relative z-10 
                        transition-all duration-300 
                        text-gray-400 
                        ${contact.color}
                        group-hover:scale-110
                      `}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-xs text-white bg-black/80 px-2 py-1 rounded">
                      {contact.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-gray-300 font-alumni text-lg md:text-xl mb-2">
              Ready to bring your ideas to life?
            </p>
            <p className="text-gray-400 font-alumni text-base md:text-lg">
              Feel free to reach out for collaborations or just to say hi!
            </p>
          </div>

          {/* Separator */}
          <div className="w-24 h-0.5 bg-gray-700 mb-8 md:mb-12"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 font-alumni text-base md:text-lg">
              © {new Date().getFullYear()} Salim Maulana. All rights reserved.
            </p>
            <p className="text-gray-600 font-alumni text-sm md:text-base mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;