import HomePage from "./page/HomePage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamsPage from "./page/TeamsPage";
import SingleUserPage from "./page/SingleUserPage";
import UserList from "./page/UserList";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="users">
            <Route path=":id" element={<SingleUserPage />} />
            <Route index element={<UserList />} />
          </Route>
          <Route path="/contacts" element={<TeamsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
