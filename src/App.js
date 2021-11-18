import styled from '@emotion/styled';
import { useState } from 'react';

const MinhaDiv = styled('div')`
    background-color: green;
    color: ${({ ligado }) => (ligado ? 'white' : 'red')};
`;

function App() {
    const [ligado, setLigado] = useState(true);
    return (
        <div onClick={() => setLigado(!ligado)}>
            <MinhaDiv ligado={ligado}>TreinaWeb</MinhaDiv>
        </div>
    );
}

export default App;
