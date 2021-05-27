import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Josefin Sans', sans-serif;
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

    input,
    textarea {
        border-radius: 8px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Lora', serif;
        color: #000;
        font-size: 2.375rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #333;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
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
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
`;
