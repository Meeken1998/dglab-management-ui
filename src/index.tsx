import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

const App: React.FC = () => {
  const element = useRoutes(routes);
  return <main>{element}</main>;
};

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
