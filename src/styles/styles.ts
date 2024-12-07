import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Inter";
        src: url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&subset=cyrillic&display=swap");
        font-style: normal;
    }

    @font-face {
        font-family: "Playfair Display";
        src: url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&subset=cyrillic&display=swap");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Inter', sans-serif;
    }

    /* Body Styles */
    body {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        color: #18216d; /* Основной цвет текста */
    }

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Playfair Display', serif; /* Элегантный шрифт для заголовков */
        color: #18216d; /* Темно-синий цвет */
        font-size: 48px; /* Основной размер */
        line-height: 1.3; /* Оптимальный межстрочный интервал */
        letter-spacing: 0.01em; /* Легкое межбуквенное расстояние */
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1); /* Легкая тень для акцента */
        margin-bottom: 1rem;

        @media only screen and (max-width: 768px) {
            font-size: 36px; /* Размер для планшетов */
            line-height: 1.2;
        }

        @media only screen and (max-width: 414px) {
            font-size: 28px; /* Размер для смартфонов */
            line-height: 1.1;
        }
    }

    /* Paragraphs */
    p {
        font-family: 'Inter', sans-serif;
        color: #18216d; /* Синий цвет текста */
        font-size: 18px; /* Оптимальный размер */
        line-height: 1.6; /* Увеличенный межстрочный интервал */
        margin-bottom: 1rem; /* Отступ между абзацами */

        @media only screen and (max-width: 768px) {
            font-size: 16px; /* Размер для планшетов */
        }

        @media only screen and (max-width: 414px) {
            font-size: 14px; /* Размер для смартфонов */
        }
    }

    /* Links */
    a {
        text-decoration: none;
        outline: none;
        color: #18216d; /* Основной синий цвет */

        :hover {
            color: #0d1b2a; /* Темнее при наведении */
            text-decoration: underline; /* Подчеркивание для акцента */
        }
    }

    /* Buttons */
    button {
        background-color: #18216d; /* Темно-синий цвет кнопки */
        color: #ffffff; /* Белый текст */
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        padding: 0.8rem 1.2rem;
        border-radius: 8px; /* Закругленные углы */
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Легкая тень */
        transition: all 0.3s ease-in-out;
        margin-top: 1rem;

        &:hover {
            background-color: #0d1b2a; /* Темнее при наведении */
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); /* Усиление тени */
            transform: translateY(-2px); /* Легкий подъем */
        }
    }

    /* Inputs and Textareas */
    input,
    textarea {
        font-family: 'Inter', sans-serif; /* Шрифт для форм */
        border-radius: 4px;
        border: 1px solid #ccc; /* Легкий серый цвет рамки */
        background: #f9f9f9;
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        font-size: 16px;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 2px; /* Акцент при фокусе */
        }
    }

    *:focus {
        outline: none;
    }

    /* Container for Mobile Adjustments */
    .container {
        padding: 1rem; /* Увеличить отступы */
        display: flex;
        flex-direction: column; /* Вертикальное расположение элементов */
        align-items: center; /* Центровка на мобильных */
        text-align: center; /* Текст по центру */
    }

    /* Images */
    .image {
        max-width: 100%;
        margin-bottom: 1rem; /* Отступ от изображения */
    }

    /* SVG Styling */
    .about-block-image svg {
        text-align: center;
        fill: #18216d; /* Цвет для SVG */
    }

    /* Drawer Content */
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
