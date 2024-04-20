import { Container, Header, ListContainer, Card } from "./styles";

import arrow from "../../../assets/styles/images/icons/arrow.svg";
import edit from "../../../assets/styles/images/icons/edit.svg";
import trash from "../../../assets/styles/images/icons/trash.svg";

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Caio Fernando</strong>
              <small>Instagram</small>
            </div>
            <span>caiofernando@gmail.com</span>
            <span>(85) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Caio Fernando</strong>
              <small>Instagram</small>
            </div>
            <span>caiofernando@gmail.com</span>
            <span>(85) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Caio Fernando</strong>
              <small>Instagram</small>
            </div>
            <span>caiofernando@gmail.com</span>
            <span>(85) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
