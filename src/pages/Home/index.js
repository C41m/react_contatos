import ContactsList from "../../components/App/ContactsList";
import { InputSearchContainer } from "./styles";

export default function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>
      <ContactsList />
    </>
  );
}
