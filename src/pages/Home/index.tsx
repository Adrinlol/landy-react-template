import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContentJSON from "../../content/MissionContent.json"; // Contains mission text & subscription data.
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import SubscriptionCard from "../../components/SubscriptionCard";

// Define interfaces
interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: string;
  features: string[];
}

interface MissionContentType {
  title: string;
  text: string;
  plans: Plan[];
}

// Cast JSON and normalize plans
const MissionContent = MissionContentJSON as MissionContentType;
const normalizedPlans = MissionContent.plans.map(plan => ({
  ...plan,
  price: plan.price.toString(),
}));

// Lazy-load components
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      {/* Intro Section */}
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="img1.svg"
        id="intro"
      />

      {/* Middle Block Section */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />

      {/* About Section */}
      <ContentBlock
        direction="left"
        title={AboutContent.title || ""}
        content={AboutContent.text || ""}
        section={(AboutContent.section || []).map((item: any) => ({
          ...item,
          content: item.content || item.text || "",
        }))}
        icon="img3.svg"
        id="about"
      />

      {/* Mission Section with Subscription Cards as Child */}
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="food.svg"
        id="mission"
      >
        {normalizedPlans.length > 0 && (
          <SubscriptionCard plans={normalizedPlans} />
        )}
      </ContentBlock>

      {/* Product Section */}
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="maa.svg"
        id="product"
      />

      {/* Contact Section */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
