import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Cat, Settings, Trash2 } from 'lucide-react';
import { ChatPage } from './pages/ChatPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <header className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Cat className="w-8 h-8 text-amber-500" />
                <h1 className="text-2xl font-bold text-gray-800">MeowChat AI</h1>
              </div>
              <nav className="flex items-center gap-4 ml-8">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  首页
                </Link>
                <Link
                  to="/chat"
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  AI对话
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
