import styled from 'styled-components'

export const Container = styled.footer`
    margin: 4rem;
    text-align: center;

    ul {
        display: inline-flex;
        justify-content: space-evenly;
    }

    li {
        list-style: none;
        color: var(--gray-light);
    }

    li + li {
        margin-left: 1rem;
    }
`
