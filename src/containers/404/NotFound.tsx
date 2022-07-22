import { Container } from "./NotFound.styles";

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1 role="title" className="title">
        404 Not Found!
      </h1>
      <p role="subtitle" className="subtitle">
        We are sorry, what you are looking for is not here!
      </p>
      <img
        role="image"
        className="image"
        src="public/assets/notfound.svg"
        alt="Not_Found_Image"
      />
    </Container>
  );
};
export default NotFound;
