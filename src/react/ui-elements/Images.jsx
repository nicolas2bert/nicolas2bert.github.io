import styled from 'styled-components';

export const ImagesContainer = styled.div`
    background-color: green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// export const ImageRow = styled.div`
//     background-color: grey;
//     display: flex;
//     flex-direction: row;
// `;

// https://stackoverflow.com/questions/45037844/arrange-2-items-per-row-using-flexbox/45038018
export const ImageContainer = styled.div`
    background-color: yellow;
    flex: 0 50%;
    // width: 100%
`;

export const Image = styled.img`
    background-color: black;
    max-width: 400px;
    // width: 100%;
`;
