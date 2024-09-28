import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { useColorModeValue } from '@chakra-ui/color-mode'
function App() {
  console.log('App: rendering');
  return (
    <Box minH="100vh" minW="100vw" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      {console.log('App: rendered')}
    </Box>
  );
}
export default App