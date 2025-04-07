import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'

import './App.css'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    return (
        <Layout>
            <Suspense fallback={<div className="text-center p-10">Carregando...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </Layout>
    )
}

export default App
