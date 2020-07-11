import { createGlobalStyle } from "styled-components";

import antd from "antd/dist/antd.css";

const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Raleway', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Raleway', sans-serif;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
    }
    
    *:focus {
        outline: none;
    }

    .about-us-image svg {
        text-align: center;
        @media only screen and (max-width:414px) {
            margin-top: 3rem;
            width: 70%;
            height: 70%;
        }
    }
`;

export default Styles;
