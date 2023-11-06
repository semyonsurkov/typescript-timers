import Container from './UI/Container.tsx';

type TimerProps = {
  name: string;
  duration: number;
};

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
