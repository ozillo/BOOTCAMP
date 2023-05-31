import "./App.css";
import { Image } from "./components/Image/Image";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { SubTitle } from "./components/SubTitle/SubTitle";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div>
      <Title />
      <SubTitle />
      <Image />
      <Paragraph />
    </div>
  );
}

export default App;

