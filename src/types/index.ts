export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface Match {
  id: string;
  team1: {
    name: string;
    logo: string;
    score?: number;
  };
  team2: {
    name: string;
    logo: string;
    score?: number;
  };
  tournament: string;
  date: string;
  time: string;
  isLive: boolean;
  isUpcoming: boolean;
  hasEnded: boolean;
}

export interface Player {
  id: string;
  name: string;
  nickname: string;
  role: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    twitch?: string;
  };
}

export interface TeamMember extends Player {
  teamId: string;
}

export interface Team {
  id: string;
  name: string;
  game: string;
  logo: string;
  rosterImage?: string;
  players: Player[];
  achievements?: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  tournament: string;
  position: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isLimited?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'partner';
}