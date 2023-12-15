import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { ImageSlider } from "../../common/ImageSlider/index";
import {
  ContentSection
} from "./styles";

const ImageBlock = ({
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <ImageSlider></ImageSlider>
    </ContentSection>
  );
};

export default withTranslation()(ImageBlock);
