import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <h1 role="title" className="title">
        Hello World! and Welcome to
      </h1>
      <h2 className="subtitle">
        Vite + TypeScript + React + React Router Dom + LazyLoading + Jest-RTL +
        Styled-Components Boilerplate
      </h2>
      <p className="credit">By Mohammad Tat-Shahdoost</p>
    </Container>
  );
};
export default Home;
