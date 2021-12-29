import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    background: var(--cyan-dark);
    color: var(--white);

    padding-bottom: 4rem;
    position: relative;
    &::after {
        content: '';
        height: 2rem;
        border-radius: 100px 100px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--background);
    }

    .menu {
        width: 100%;
        margin: 0 1rem;
    }

    .burger-aberto {
        display: flex;
        list-style: none;
        justify-content: space-between;

        align-items: center;

        .usuario-pequeno {
            display: flex;
            flex-direction: column;
        }
    }
`
