import styled from '@emotion/styled';

const MinhaDiv = styled('div')`
    background-color: green;
    color: white;
`;

const MinhaOutraDiv = styled(MinhaDiv)`
    font-weight: bold;
    color: red;
`;

function App() {
    return (
        <div>
            <MinhaDiv>TreinaWeb</MinhaDiv>
            <MinhaOutraDiv>TreinaWeb 222</MinhaOutraDiv>
        </div>
    );
}

export default App;
