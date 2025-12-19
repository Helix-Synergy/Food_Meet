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
    link: '/FOODMEET_BROCHURE.pdf'
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
    <div className="fixed bottom-8 right-0 z-50 flex flex-col space-y-3">
      {links.map(({ id, icon: Icon, label, path, link }) => {
        const isActive = hoveredId === id;
        const href = path || link;

        const classes = `flex items-center bg-white shadow-md rounded-l-full overflow-hidden transform transition-all duration-300 ${
          isActive ? 'translate-x-0' : 'translate-x-40'
        } ${id === 'mobile' ? 'animate-pulseShadow' : ''}`;

        // ✅ PDF download (native anchor)
        if (id === 'brochure-download') {
          return (
            <a
              key={id}
              href={href}
              download
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={classes}
            >
              <div className="bg-one text-white p-3 flex items-center justify-center rounded-l-full">
                <Icon className="h-5 w-5" />
              </div>
              <span className="ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {label}
              </span>
            </a>
          );
        }

        // ✅ Normal routes
        return (
          <Link
            key={id}
            to={href}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className={classes}
          >
            <div className="bg-one text-white p-3 flex items-center justify-center rounded-l-full">
              <Icon className="h-5 w-5" />
            </div>
            <span className="ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
