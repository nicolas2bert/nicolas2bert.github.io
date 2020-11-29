import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid #777;
    margin: 0 5%;
`;

export const Row = styled.div`
    align-items: baseline;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1rem 0;
`;

export const Date = styled.div`
    flex: 0 30%;
    text-align: center;
    &:after{
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background: #fff;
        border: 1px solid #777;
        content: "";
        position: relative;
        display: block;
        left: -37px;
        top: -14px;
    }
    margin-left: 2rem;
`;

export const Description = styled.div`
    flex: 0 70%;
    text-align: center;
`;
