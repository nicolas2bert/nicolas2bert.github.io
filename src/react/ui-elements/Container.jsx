import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 544px) {
        max-width: 576px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      max-width: 720px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      max-width: 720px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      max-width: 720px;
    }

    /* padding-right: 10rem;
    padding-left: 10rem; */

    margin-right: auto;
    margin-left: auto;
`;
