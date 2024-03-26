import styled from "styled-components";
import {Carousel, Flex} from "antd";

export const QualitySlide = styled("div")`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`

export const StyledCarousel = styled(Carousel)`
    max-width: 600px;
    padding: 2em;
    
    @media screen and (max-width: 1024px) {
        margin: 3em
    }
`