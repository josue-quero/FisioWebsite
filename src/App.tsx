import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './common/ui/Layout';
import Home from './pages/Home';

function App() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ];

  const router = createBrowserRouter(routes);

  return (<RouterProvider router={router}/>)
}

export default App;