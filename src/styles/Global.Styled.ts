import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }
    a {
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    section {
        background-color: ${theme.colors.primaryBg};
        margin: 100px 0;

        &:not(:first-child) {
            margin: 100px 0;

            @media ${theme.media.mobile} {
            margin: 80px 0;
        }
        }

        @media ${theme.media.mobile} {
            margin: 80px 0;
        }
    }

    h3 {
        font-family: Poppins;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0px;
    }

    p {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0.06rem;
    }
`