// Calling locally createRoot, MainView and container components.
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";

// Importing scss into index.jsx
import "./index.scss";


// Using container components.
const MyFlixApp = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );  
};

//Finding the root , importing creatRoot and Rendering the app.
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApp />);