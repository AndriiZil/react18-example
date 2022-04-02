# React18 Example

1. Component render
```bash
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    root.render(<App />)
```
2. Batching (in v17 RENDER will be visible in comsole 2 times)
* Will be called `RENDER` 1 time
```bash
  setTimeout(() => {
    setState(prev => prev + 1);
    setValue(prev => prev + 1);
  }, 100);    
```
* Will be called `RENDER` using `flushSync` 2 times like in React v17
```bash
  Promise.resolve()
    .then(() => {
      flushSync(() => {
        setValue(prev => prev + 1);
      });
      flushSync(() => {
        setState(prev => prev + 1);
      });
    })
```
3. Transition

