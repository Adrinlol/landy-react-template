import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #FFF5E1;  /* Warm soft beige background */
        overflow-x: hidden;
    }

    a:hover {
        color: #D65A31;  /* Warm terracotta shade */
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: #FCE9D2; /* Soft peach */
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #BF4E30 0px 0px 0px 1px; /* Earthy red */
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #6A1B4D;  /* Deep warm berry shade */
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #823329; /* Warm brownish-red, comforting */
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #D65A31; /* Terracotta shade */

        :hover {
            color: #BF4E30; /* Darker earthy red */
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
