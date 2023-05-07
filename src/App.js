import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';

function App() {
  const [sizes, setSizes] = useState(['50%', 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={{ height: '100vh' }}>
      <SplitPane
        split='vertical'
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={'20%'} maxSize='60%'>
          <div style={{ ...layoutCSS, background: '#ddd' }}>
            pane1
          </div>
        </Pane>
        <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
          pane2
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
