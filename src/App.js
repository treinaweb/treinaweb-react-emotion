import styled from '@emotion/styled/macro';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

const tema = {
    corDaFonte: 'red',
    corDeFundo: 'green',
};

const tema2 = {
    corDaFonte: 'blue',
    corDeFundo: 'gray',
};

const MinhaDiv = styled('div')`
    background-color: ${({ theme }) => theme.corDeFundo};
    color: ${({ theme }) => theme.corDaFonte};
`;

function App() {
    const [ligado, setLigado] = useState(true);
    return (
        <ThemeProvider theme={ligado ? tema : tema2}>
            <div onClick={() => setLigado(!ligado)}>
                <MinhaDiv>TreinaWeb</MinhaDiv>
            </div>
        </ThemeProvider>
    );
}

export default App;
