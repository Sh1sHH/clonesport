import { Match, Team, Player, Product, NewsArticle, Sponsor, FooterSection, SocialLink } from '../types';

export const matches: Match[] = [
  {
    id: '1',
    team1: {
      name: 'FNATIC',
      logo: '/team-logos/fnatic.png',
      score: 2,
    },
    team2: {
      name: 'G2',
      logo: '/team-logos/g2.png',
      score: 1,
    },
    tournament: 'LEC Summer Split',
    date: '2025-06-12',
    time: '18:00',
    isLive: false,
    isUpcoming: true,
    hasEnded: false,
  },
  {
    id: '2',
    team1: {
      name: 'FNATIC',
      logo: '/team-logos/fnatic.png',
      score: 16,
    },
    team2: {
      name: 'NaVi',
      logo: '/team-logos/navi.png',
      score: 14,
    },
    tournament: 'ESL Pro League',
    date: '2025-06-05',
    time: '20:00',
    isLive: false,
    isUpcoming: false,
    hasEnded: true,
  },
  {
    id: '3',
    team1: {
      name: 'FNATIC',
      logo: '/team-logos/fnatic.png',
    },
    team2: {
      name: 'T1',
      logo: '/team-logos/t1.png',
    },
    tournament: 'Worlds 2025',
    date: '2025-06-20',
    time: '16:00',
    isLive: false,
    isUpcoming: true,
    hasEnded: false,
  },
];

export const players: Player[] = [
  {
    id: 'player1',
    name: 'John Smith',
    nickname: 'Rekkles',
    role: 'ADC',
    image: 'https://images.pexels.com/photos/1852389/pexels-photo-1852389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      twitch: 'https://twitch.tv',
    },
  },
  {
    id: 'player2',
    name: 'Michael Johnson',
    nickname: 'Caps',
    role: 'Mid',
    image: 'https://images.pexels.com/photos/1799901/pexels-photo-1799901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      twitch: 'https://twitch.tv',
    },
  },
  {
    id: 'player3',
    name: 'Robert Williams',
    nickname: 'Bwipo',
    role: 'Top',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialLinks: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      twitch: 'https://twitch.tv',
    },
  },
];

export const teams: Team[] = [
  {
    id: 'team1',
    name: 'FUT LoL',
    game: 'League of Legends',
    logo: '/team-logos/fnatic.png',
    rosterImage: '/pubgm_roster.webp',
    players: players,
    achievements: [
      {
        id: 'achievement1',
        title: 'LEC Champions',
        date: '2025-04-15',
        tournament: 'LEC Spring Split',
        position: '1st',
      },
      {
        id: 'achievement2',
        title: 'Worlds Semi-Finalist',
        date: '2024-11-10',
        tournament: 'Worlds 2024',
        position: '3rd-4th',
      },
    ],
  },
  {
    id: 'team2',
    name: 'FUT CS',
    game: 'CS2',
    logo: '/team-logos/fnatic.png',
    rosterImage: '/pubgm_roster.webp',
    players: players,
    achievements: [
      {
        id: 'achievement3',
        title: 'Major Champions',
        date: '2025-03-01',
        tournament: 'PGL Major',
        position: '1st',
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: 'product5',
    name: 'FUT Hoodie',
    category: 'Apparel',
    price: 59.99,
    image: '/hoodie.webp',
    isNew: true,
  },
  {
    id: 'product6',
    name: 'FUT Forma',
    category: 'Apparel',
    price: 79.99,
    image: '/forma.webp',
    isNew: true,
  },
  {
    id: 'product7',
    name: 'FUT Longsleeve',
    category: 'Apparel',
    price: 69.99,
    image: '/longsleeve.webp',
    isNew: true,
  },
  {
    id: 'product8',
    name: 'FUT Atkı',
    category: 'Accessories',
    price: 29.99,
    image: '/atki.webp',
    isNew: true,
  }
];

export const news: NewsArticle[] = [
  {
    id: 'news1',
    title: 'FUT Advances to Worlds 2025 Finals',
    excerpt: 'After a stunning performance against T1, FUT secures their spot in the finals.',
    date: '2025-05-30',
    image: 'https://images.pexels.com/photos/7915495/pexels-photo-7915495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tournament',
    slug: 'fnatic-advances-to-worlds-finals',
  },
  {
    id: 'news2',
    title: 'New Gaming Gear Collection Launched',
    excerpt: 'FUT partners with leading tech brands to release exclusive gaming peripherals.',
    date: '2025-05-25',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Products',
    slug: 'new-gaming-gear-collection',
  },
  {
    id: 'news3',
    title: 'FUT Signs Rising Star for CS2 Team',
    excerpt: 'The 18-year-old prodigy joins FUT CS2 roster ahead of the Major.',
    date: '2025-05-20',
    image: 'https://images.pexels.com/photos/7915528/pexels-photo-7915528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Team',
    slug: 'fnatic-signs-rising-star',
  },
  {
    id: 'news4',
    title: 'Community Event: Meet & Greet in London',
    excerpt: 'Join us for an exclusive fan meetup with FUT players at our London HQ.',
    date: '2025-05-15',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Community',
    slug: 'community-event-london',
  },
];

export const sponsors: Sponsor[] = [
  {
    id: 'sponsor1',
    name: 'Adidas',
    logo: '/adidas_logo.webp',
    tier: 'platinum',
  },
  {
    id: 'sponsor2',
    name: 'Logitech',
    logo: '/logi_logo.webp',
    tier: 'platinum',
  },
  {
    id: 'sponsor3',
    name: 'Red Bull',
    logo: '/redbull_logo.webp',
    tier: 'gold',
  },
  {
    id: 'sponsor4',
    name: 'Vodafone',
    logo: '/vodafone_logo.webp',
    tier: 'gold',
  },
];

export const footerLinks: FooterSection[] = [
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Teams', href: '/teams' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Apparel', href: '/shop/apparel' },
      { label: 'Peripherals', href: '/shop/peripherals' },
      { label: 'Limited Edition', href: '/shop/limited' },
      { label: 'Sale', href: '/shop/sale' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: 'https://discord.gg' },
      { label: 'Forums', href: '/forums' },
      { label: 'Events', href: '/events' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { platform: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { platform: 'Twitch', href: 'https://twitch.tv', icon: 'twitch' },
  { platform: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { platform: 'Discord', href: 'https://discord.gg', icon: 'discord' },
];