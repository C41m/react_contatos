import {
  Container,
  ContainerTitle,
} from "./styles";

export default function Header() {
  return (
    <Container>
      <ContainerTitle>
        <h1>Meus</h1>
        <h1 className="contact">Contatos</h1>
      </ContainerTitle>
    </Container>
  );
}
