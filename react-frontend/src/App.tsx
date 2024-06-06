import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import FormRenderer from './FormRenderer';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <FormRenderer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
