import styled from 'styled-components';

export const VisualWrap = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    text-align: center;
    background-color: beige;
    img {
        width: 50%;
    }
`;

export const MainWrap = styled.div`
    &.main {
    }
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
`;
