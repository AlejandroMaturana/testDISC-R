import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Results from './pages/Results';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/results',
        element: <Results />,
    },
    {
        path: '/terms',
        element: <Terms />,
    },
    {
        path: '/privacy',
        element: <Privacy />,
    },
    {
        path: '*', // Ruta para páginas no encontradas
        element: (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-gray-600 mb-6">Página no encontrada</p>
                    <a
                        href="/"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Volver al inicio
                    </a>
                </div>
            </div>
        ),
    },
]);
