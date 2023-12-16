import { withTranslation } from 'react-i18next';
import { ContentBlockProps } from "./types";
import { ImageSlider } from "../../common/ImageSlider/index";
import {
  ContentSection
} from "./styles";

const ImageBlock = ({
  id,
}: ContentBlockProps) => {
  return (
    <ContentSection id={id}>
      <ImageSlider></ImageSlider>
    </ContentSection>
  );
};

export default withTranslation()(ImageBlock)