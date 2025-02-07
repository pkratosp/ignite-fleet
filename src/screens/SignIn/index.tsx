import { Container, Slogan, Title } from "./style";
import backgroundImg from "../../assets/background.png";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Iginite fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>

      <Button title="Entrar com o google" />
    </Container>
  );
}
