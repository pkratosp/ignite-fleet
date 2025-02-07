import { TouchableOpacityProps } from "react-native";
import { Container, Loading, Title } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading === true ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
}
