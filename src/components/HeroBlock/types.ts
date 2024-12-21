export interface HeroBlockProps {
  title: string;
  subtitle?: string;
  buttons: {
    title: string;
    color?: string;
    link: string;
  }[];
  backgroundImages: string[];
}
