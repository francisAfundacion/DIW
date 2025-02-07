import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./screens/not-found/NotFound";
import Dashboards from "./screens/dashboards/Dashboards";
import NewAnswer from "./screens/new_answer/NewAnswer";
import NewQuestion from "./screens/new_question/NewQuestion";
import QuestionDetail from "./screens/question_detail/QuestionDetail";
import "./App.css"
import DashboardDetail from "./screens/dashboard_detail/DashboardDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/" element={<Dashboards />}></Route>
        <Route path="/dashboards/:dashboardId" element={<DashboardDetail />}></Route>
        <Route path="/dashboards/:darhboardId/newQuestion" element={<NewQuestion />}></Route>
        <Route path="/dashboards/:dashboardId/questions/:questionId" element={<QuestionDetail />}></Route>
        <Route path="/dashboards/:dashboardId/questions/:questionId/newAnswer" element={<NewAnswer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
