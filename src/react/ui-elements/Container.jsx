import styled from 'styled-components';

export const Container = styled.div`
    background-color: blue;
    @media (min-width: 544px) {
        max-width: 576px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      max-width: 720px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      max-width: 940px;.
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    padding-right: .9375rem;
    padding-left: .9375rem;

    margin-right: auto;
    margin-left: auto;
`;
