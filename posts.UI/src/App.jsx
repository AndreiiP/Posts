import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/Post/PostList";
import "./css/App.css";
import PostEdit from "./components/Post/PostEdit";
import Layout from "./components/Layout";
import NewsList from "./components/News/NewsList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/post" element={<PostList />} />
          <Route path="/post/:postId" element={<PostEdit />} />
          <Route path="/news" element={<NewsList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
