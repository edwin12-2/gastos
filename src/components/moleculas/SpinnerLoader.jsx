import styled from "styled-components";
import { DotLoader } from "react-spinners";
import { useOperaciones } from "../../index";
export function SpinnerLoader() {
  const { colorCategoria } = useOperaciones();
  return (
    <Container>

<DotLoader
  color="#1f7537"
  cssOverride={{}}
  loading
  size={50}
/>    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(31, 31, 31);
  transform: all 0.3s;


`;
