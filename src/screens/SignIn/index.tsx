import { Container, Slogan, Title } from "./style";
import backgroundImg from "../../assets/background.png";

export function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>Iginite fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>
    </Container>
  );
}
