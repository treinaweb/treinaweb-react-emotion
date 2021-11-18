import styled from '@emotion/styled/macro';
import { useState } from 'react';

const MeuSpan = styled('span')``;

const MinhaDiv = styled('div')`
    background-color: green;
    color: ${({ ligado }) => (ligado ? 'white' : 'red')};

    &:hover ${MeuSpan} {
        color: red;
    }
`;

function App() {
    const [ligado, setLigado] = useState(true);
    return (
        <div onClick={() => setLigado(!ligado)}>
            <MinhaDiv ligado={ligado}>
                TreinaWeb
                <MeuSpan>Teste</MeuSpan>
            </MinhaDiv>
        </div>
    );
}

export default App;
