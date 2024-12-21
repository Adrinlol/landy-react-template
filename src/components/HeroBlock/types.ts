export interface HeroBlockProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttons: {
    title: string;
    color?: string;
    link: string;
  }[];
  backgroundImages: string[];
}
