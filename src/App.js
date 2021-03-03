import React from 'react';

//importing contexts
import {ThemeContextProvider} from './context/ThemeContext';

// importing components
import PanelBar from './components/PanelBar';
import PreviewBar from './components/PreviewBar';
import {OuterWrapper} from './styled components/containers'


function App() {
  return (
    <ThemeContextProvider>
      <OuterWrapper>
        <PanelBar />
        <PreviewBar />
      </OuterWrapper>
    </ThemeContextProvider>
  );
}

export default App;
