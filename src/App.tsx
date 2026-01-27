import { ThemeProvider } from './contexts/ThemeContext';
import { EffectsProvider } from './contexts/EffectsContext';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './components/pages/Home';

function App() {
  return (
    <ThemeProvider>
      <EffectsProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </EffectsProvider>
    </ThemeProvider>
  );
}

export default App;
