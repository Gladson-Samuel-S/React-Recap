import { Route, Routes } from "react-router-dom";

//Components
import CreateNote from "./components/CreateNote";
import Dashboard from "./components/Dashboard";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/create" element={<Layout />}>
          <Route index element={<CreateNote />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
