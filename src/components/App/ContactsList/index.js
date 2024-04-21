import { Link } from "react-router-dom";

import { Container, Header, ListContainer, Card } from "./styles";

import arrow from "../../../assets/styles/images/icons/arrow.svg";
import edit from "../../../assets/styles/images/icons/edit.svg";
import trash from "../../../assets/styles/images/icons/trash.svg";
import Modal from "../../Modal";

export default function ContactsList() {
  return (
    <Container>
      <Modal danger />

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
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
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
