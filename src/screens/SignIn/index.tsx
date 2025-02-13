import { Container, Slogan, Title } from "./style";
import backgroundImg from "../../assets/background.png";
import { Button } from "../../components/Button";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { IOS_CLIENT_ID, WEB_CLIENT_ID } from "@env";
import { useState } from "react";
import { Alert } from "react-native";

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isLoadingAuthenticate, setIsLoadingAuthenticate] = useState(false);

  async function handleSignIn() {
    try {
      setIsLoadingAuthenticate(true);

      const response = await GoogleSignin.signIn();

      if (response.data?.idToken) {
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar-se a sua conta google."
        );
      }
    } catch (error) {
      Alert.alert("Entrar", "Não foi possível conectar-se a sua conta google.");
    } finally {
      setIsLoadingAuthenticate(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Iginite fleet</Title>

      <Slogan>Gestão de uso de veiculos</Slogan>

      <Button
        onPress={handleSignIn}
        title="Entrar com o google"
        isLoading={isLoadingAuthenticate}
      />
    </Container>
  );
}
