import React, { Fragment } from "react";
import { Row, Col } from "antd";

import ContactFrom from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";

import Button from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

const Home = () => {
  return (
    <Fragment>
      <ContentBlock
        type="right"
        title="✨Why even bother?"
        content="This template is designed to quickly create react projects, with already developed responsive components and funcionalities, 
        while still retaining all of the features of CRA."
        button="Want to know more?"
        icon="about-us.svg"
      />
      <MiddleBlock
        title="Benefits"
        content="The amount of time I spend setting up new React projects has gone from few agonizing hours to a few blissful minutes. 
        No more countless hours wasted on adding extra packages and boilerplates for routing."
        button="Get started"
      />
      <ContentBlock
        type="left"
        title="Left content block"
        content="This template currently supports two types of blocks, left and right. The only difference between them being the positioning of text/image. 
        Almost forgot, right block also has a button."
        icon="team-goals.svg"
      />
      <MiddleBlock
        title="Buttons"
        content="Speaking of buttons, you can change the button color by passing - color property. By default it's blue, but it can also be:"
        button="Blue"
      />
      <Container>
        <Row type="flex" justify="space-between" align="middle">
          <Button color="#E44945">Red</Button>
          <Button color="#FEC03D">Yellow</Button>
        </Row>
      </Container>
      <MiddleBlock
        title="Input and textarea"
        content="Next up we have a basic widget for text input and textarea. It also changes color on hover  :)"
      />
      <Container>
        <Row type="flex" justify="center" align="middle">
          <Col lg={6} md={12} sm={24} xs={24}>
            <Input type="text" name="name" placeholder="Text Input" />
            <TextArea placeholder="TextArea" />
          </Col>
        </Row>
      </Container>
      <MiddleBlock
        title="Declarative Routing"
        content="Routing is already set up and ready to go, to provide accessible navigation around your application. All you need to do is add new path and page name in config.js file."
      />
      <MiddleBlock
        title="SVG Icons"
        content="There are a lot of bits about working with React and SVG, and especially manipulating it, that aren’t quite supported yet. This component only receives src property, just pass the name of your SVG icon."
      />
      <Container>
        <Row type="flex" justify="center" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <SvgIcon
              src="hexagonal-small.svg"
              style={{ textAlign: "center" }}
            />
          </Col>
        </Row>
      </Container>
      <MiddleBlock
        title="SVG Decorations"
        content="This is an experimental component that sets the provided SVG as a background.
        It basically does the same thing as SVG Icon, but also supports absolute positioning, meaning that you can set it anywhere. "
      />
      <MiddleBlock
        title="Header and Footer"
        content="Last but not least, fully responsive footer & header, with both external and router links."
      />
      <MiddleBlock
        title="Conclusion"
        content="That’s all there is to it! Edit pages/Home/index.js and save to reload."
      />
      <ContactFrom />
    </Fragment>
  );
};

export default Home;
