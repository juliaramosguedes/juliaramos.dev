import styled from 'styled-components';

export const Modal = styled.div`
    background-color: white;
    max-width: 95%;
    max-height: 95%;
    color: black;
    padding: 25px;
    z-index: 100;
    border-radius: 8px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > * :not(:first-child) {
        max-height: 100%;
        max-width: 100%;
    }

    button {
        border: 0;
        background-color: transparent;
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
        max-width: 80%;
    }
`
