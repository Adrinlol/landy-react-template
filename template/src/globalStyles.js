import { createGlobalStyle } from "styled-components";

import antd from "antd/dist/antd.css";

const Styles = createGlobalStyle`

    ${antd}

    body,
    html,
    a {
        font-family: 'Roboto', sans-serif;
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
        font-family: 'Roboto', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #505F98;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #505F98;
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
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }
    
    .ant-select-selector {
        background: #E7ECFF !important;
        border: none !important;
    }

    .ant-select-selection-item {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: #505F98;
    }

`;

export default Styles;
