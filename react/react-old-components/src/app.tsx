import * as React from 'react';
import { Header, } from './components';

export const App: React.FC<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
    </div>
  );
}
