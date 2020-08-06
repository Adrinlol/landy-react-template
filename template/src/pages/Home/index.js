import React from "react";

import ContactFrom from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";
import Container from "../../common/Container";

import Introduction from "../../content/introduction.json";
import FirstBlock from "../../content/firstBlock.json";
import SecondBlock from "../../content/secondBlock.json";
import ThirdBlock from "../../content/thirdBlock.json";
import FourthBlock from "../../content/fourthBlock.json";
import ContactBlock from "../../content/contactBlock.json";

const Home = () => {
  return (
    <Container>
      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="intro.svg"
      />
      <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      />
      <ContentBlock
        type="left"
        title={SecondBlock.title}
        content={SecondBlock.text}
        section={SecondBlock.section}
        icon="mobile.svg"
      />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={FourthBlock.text}
        icon="web.svg"
      />

      <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        icon="mention.svg"
      />
      <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
    </Container>
  );
};

export default Home;
