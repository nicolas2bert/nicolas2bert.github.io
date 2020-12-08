import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90%;

    @media (min-width: 544px) {
        max-width: 500px;
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

export const H2 = styled.h2`
    font-family: sans-serif;
    font-size: 12px;
    line-height: 12px;
    color: #777;
    letter-spacing: .2rem;
    padding-bottom: 1rem;
    margin: 0;
`;

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: 100;
    font-size: 29px;
    line-height: 40px;
    color: #5F5F5F;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      font-size: 50px;
      line-height: 62px;
    }
`;
