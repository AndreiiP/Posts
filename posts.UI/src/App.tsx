import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./pages/Post/PostList";
import "./assets/styles/App.css";
import PostEdit from "./pages/Post/PostEdit";
import Layout from "./components/Layout";
import NewsList from "./pages/News/NewsList";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/post" element={<PostList />} />
            <Route path="/post/:postId" element={<PostEdit />} />
            <Route path="/news" element={<NewsList />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
