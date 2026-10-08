// Small inline SVG icons (the larger header / benefit icons are image assets extracted from the design)

export const StarIcon = ({ half }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    {half && (
      <defs>
        <linearGradient id="halfStar"><stop offset="50%" stopColor="#FFC700" /><stop offset="50%" stopColor="#D9D9D9" /></linearGradient>
      </defs>
    )}
    <path fill={half ? "url(#halfStar)" : "#FFC700"} d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);

export const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);
export const CompareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 3l4 4-4 4M3 7h18M7 21l-4-4 4-4M21 17H3" />
  </svg>
);
export const LikeIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-8-5.2-8-11a4.7 4.7 0 018-3.2A4.7 4.7 0 0120 10c0 5.8-8 11-8 11z" />
  </svg>
);

export const FilterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M3 7h10M17 7h4M3 17h4M11 17h10" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" />
  </svg>
);
export const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
    <circle cx="7" cy="7" r="2.6" /><circle cx="17" cy="7" r="2.6" /><circle cx="7" cy="17" r="2.6" /><circle cx="17" cy="17" r="2.6" />
  </svg>
);
export const ListIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" />
  </svg>
);

export const ChevronRight = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5l7 7-7 7" />
  </svg>
);
export const ChevronDown = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 9l7 7 7-7" />
  </svg>
);

export const TrashIcon = () => (
  <svg width="20" height="22" viewBox="0 0 24 24" fill="#B88E2F" aria-hidden="true">
    <path d="M9 3h6l1 2h4v2H4V5h4zM5 9h14l-1 12H6z" />
  </svg>
);
export const BagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9F9F9F" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 8h14l1 13H4zM9 8V6a3 3 0 016 0v2" />
  </svg>
);
export const CloseCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#9F9F9F" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" aria-hidden="true"><path d="M12 2a10 10 0 00-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0012 2z" /></svg>
);
export const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="3" fill="#000" /><path fill="#fff" d="M6.5 9.5h2.4V17H6.5zM7.7 6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM10.6 9.5h2.3v1c.4-.7 1.2-1.2 2.4-1.2 2.3 0 2.7 1.5 2.7 3.5V17h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9V17h-2.4z" /></svg>
);
export const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#000" /><path fill="#fff" d="M17.5 9.2c-.4.2-.8.3-1.2.3.4-.3.8-.7.9-1.2-.4.2-.9.4-1.3.5a2.1 2.1 0 00-3.6 1.9c-1.7-.1-3.300-.9-4.300-2.200-.6 1-.3 2.200.6 2.800-.3 0-.7-.1-1-.3 0 1 .7 1.900 1.700 2.100-.3.1-.7.1-1 0 .3.8 1.100 1.400 2 1.500A4.200 4.200 0 016.200 15.500 6 6 0 0015.600 10.200v-.3c.4-.3.7-.6 1.900-.7z" /></svg>
);

export const LocationIcon = () => (
  <svg width="16" height="20" viewBox="0 0 24 24" fill="#000" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.500A2.500 2.500 0 1112 6.500a2.500 2.500 0 010 5z" /></svg>
);
export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#000" aria-hidden="true"><path d="M6.600 10.800a15 15 0 006.600 6.600l2.200-2.200a1 1 0 011-.2 11 11 0 003.500.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.500a1 1 0 011 1c0 1.200.2 2.400.6 3.500a1 1 0 01-.2 1z" /></svg>
);
export const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#000" /><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
);

export const UserSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#9F9F9F" aria-hidden="true"><circle cx="12" cy="8" r="4.500" /><path d="M3 21c0-4.500 4-7 9-7s9 2.500 9 7z" /></svg>
);
export const CalendarSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#9F9F9F" aria-hidden="true"><path d="M4 5h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm1 5v9h14v-9zM7 2h2v4H7zm8 0h2v4h-2z" /></svg>
);
export const TagSmall = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#9F9F9F" aria-hidden="true"><path d="M3 12V4a1 1 0 011-1h8l9 9-9 9zm4-5a1.500 1.500 0 100 3 1.500 1.500 0 000-3z" /></svg>
);
export const SearchSmall = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
);
