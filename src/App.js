import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

const sumir = keyframes`
  0%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
`;

const MeuSpan = styled('span')``;

const MinhaDiv = styled('div')`
    background-color: green;
    color: ${({ ligado }) => (ligado ? 'white' : 'red')};

    &:hover ${MeuSpan} {
        color: red;
        animation: ${sumir} 1s ease alternate-reverse infinite;
        @media (max-width: 200px) {
            color: blue;
        }
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
