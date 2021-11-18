import { createContext } from 'react';
import styles from './App.module.css';
import Index from './ui/pages/index';
import { useApp } from './data/hooks/useApp.page';
import { ThemeProvider } from '@emotion/react';
import darkTheme from './ui/themes/darkTheme';

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <header className={styles['header']}>
                    <h1>
                        Treina<span>Music</span>
                    </h1>
                </header>
                <AppContext.Provider value={useAppValues}>
                    <Index />
                </AppContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
