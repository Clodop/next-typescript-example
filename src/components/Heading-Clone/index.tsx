import * as Styled from './styles';

export type headingMeProps = {
  title?: string;
};

export function Heading({ title = 'Trocar-aqui' }: headingMeProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
