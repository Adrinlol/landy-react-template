import { lazy } from "react";
import Overview from "../../content/ContactPage/OverviewContent.json";
import ContactInfo from "../../content/ContactPage/BusinessInfo.json";

const ContactForm = lazy(() => import("../../components/ContactForm"));
const FeedbackForm = lazy(() => import("../../components/FeedbackForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const BusinessInfo = lazy(() => import("../../components/BusinessInfo"));
const Container = lazy(() => import("../../common/Container"));


const Contact = () => {
    return (
        <Container>
            <MiddleBlock title={Overview.title} content={Overview.description}/>
            <BusinessInfo
                fb={ContactInfo.facebook}
                x={ContactInfo.twitterx}
                email={ContactInfo.email}
                phone={ContactInfo.phone}
                line1={ContactInfo.line1}
                line2={ContactInfo.line2}
                line3={ContactInfo.line3}
                />
            <ContactForm
                title="Got any questions?"
                content="We're here to help."
                id="contact"
            />
            {/** Placeholder for feedback form **/}
            <FeedbackForm
                title="Feedback"
                content="It'll help improve our services."
                id="feedback"
            />
        </Container>
    );
};

export default Contact;
