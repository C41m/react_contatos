import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import ContactForm from "../../components/ContactsForm";

export default function NewContact() {
  return (
    <>
      <PageHeader title={"Novo Contato"} />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
