import styled from 'styled-components';

export const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// export const ImageRow = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

// https://stackoverflow.com/questions/45037844/arrange-2-items-per-row-using-flexbox/45038018
export const ImageContainer = styled.div`
    flex: 0 50%;
    text-align: center;
    // width: 100%
`;

export const Image = styled.img`
    width: 300px;
    margin: 1rem;
    cursor: pointer;
    border-radius: 5px;
    box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);

    @media (min-width: 544px) {
        width: 300px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        width: 400px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width: 300px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        width: 300px;
    }

    // gray out animation
    -webkit-filter: grayscale(50%);
    filter: grayscale(50%);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

    &:hover {
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
`;

export const Title = styled.div`
    padding-top: 3rem;
    text-align: center;
`;
