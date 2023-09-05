import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}; */
    }

    body {
        /* background: ${(props) => props.theme['base-background']}; */
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antiliased;
    }

    body, input, textarea, button, a {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        line-height: 160%;
        font-size: 0.75rem;
    }

    input {
        color: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-border']};
    }

    a {
        color: ${(props) => props.theme.blue};
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    header {
        font-family: 'Baloo 2', cursive;
        
    }

    input {

        &:focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
        }
    }
`
