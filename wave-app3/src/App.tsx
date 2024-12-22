import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Layout from './Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login/>} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
