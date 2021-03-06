import ReactMarkdown from "react-markdown";
import { lesson_three } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown source={lesson_three} />
      </div>
    </div>
  );
};

export default App;
