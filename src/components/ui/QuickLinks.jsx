import { Download, CalendarCheck, ScrollText, HelpCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../../assets';
 
const links = [
  {
    id: 'mobile',
    icon: Phone,
    label: 'Call Us',
    path: 'tel:+13052398055'
  },
  {
    id: 'brochure-download',
    icon: Download,
    label: 'Brochure download',
    link: '/brochure-download'
  },
  {
    id: 'event-schedule',
    icon: CalendarCheck,
    label: 'Schedule',
    link: '/international-foodmeet-event-schedule'
  },
  {
    id: 'abstract-submission',
    icon: ScrollText,
    label: 'Submit Abstract',
    link: '/abstract-submission'
  },
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    link: 'https://api.whatsapp.com/send/?phone=13052398055&text=Hello&type=phone_number&app_absent=0'
  },
  {
    id: 'faq',
    icon: HelpCircle,
    label: 'FAQs',
    link: '/faq'
  }
];
 
const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);
 
  return (
    <>
      <style>
        {`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0 0 #48734b;
          }
          50% {
            box-shadow: 0 0 20px 6px #48734b;
          }
        }
 
        .animate-pulseShadow {
          animation: pulseShadow 2s ease-in-out infinite;
        }
 
        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>
 
      <div className="fixed bottom-8 right-0 z-50 flex flex-col space-y-3">
        {links.map(({ id, icon: Icon, label, path, link }) => {
          const isActive = hoveredId === id;
          const href = path || link;
 
          return (
            <Link
              key={id}
              to={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`flex items-center bg-white shadow-md rounded-l-full overflow-hidden transform transition-all duration-300 ${
                isActive ? 'translate-x-0' : 'translate-x-40'
              } ${id === 'mobile' ? 'animate-pulseShadow' : ''}`}
            >
              <div className="bg-one text-white p-3 flex items-center justify-center rounded-l-full transition-custom">
                <Icon className="h-5 w-5" />
              </div>
              <span className="ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
 
export default QuickLinks;