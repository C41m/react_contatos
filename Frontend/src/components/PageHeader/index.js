import { Link } from "react-router-dom";
import arrow from "../../assets/styles/images/icons/arrow.svg";
import { Container } from "../../components/PageHeader/styles";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
