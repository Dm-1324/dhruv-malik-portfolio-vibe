import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// System-aware theme: applies `.dark` class based on prefers-color-scheme
const mql = window.matchMedia('(prefers-color-scheme: dark)');
const applyTheme = (isDark: boolean) => {
  document.documentElement.classList.toggle('dark', isDark);
};
applyTheme(mql.matches);
mql.addEventListener('change', (e) => applyTheme(e.matches));

createRoot(document.getElementById("root")!).render(<App />);
