import styled from "styled-components";
import {Carousel, Flex} from "antd";

export const QualitySlide = styled("div")`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`

export const StyledFlex = styled(Flex)`
    text-align: center;
    padding: 2em;
    @media screen and (max-width: 624px) {
        justify-content: center;
        flex-direction: column;
    }
`

export const StyledCarousel = styled(Carousel)`
    max-width: 600px;
    padding: 2em;
    
    @media screen and (max-width: 1024px) {
        padding: 0
    }
`