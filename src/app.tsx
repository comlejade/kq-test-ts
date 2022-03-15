import * as React from 'react';
import './app.css';
import { ConfigProvider } from '@kqinfo/ui';

const App: React.FC = props => {
  
  return <ConfigProvider brandPrimary={'#2780d9'}>{props.children}</ConfigProvider>;
}

export default App;
