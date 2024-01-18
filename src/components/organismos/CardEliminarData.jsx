import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { v } from "../../styles/variables";
import { useCategoriasStore,useUsuariosStore } from "../../index";
import Swal from "sweetalert2";

export function CardEliminarData() {
    const { eliminarCategoriasTodas } = useCategoriasStore();
    const { datausuarios } = useUsuariosStore();
    const eliminar = async () => {
        Swal.fire({
            title: "¿Estás seguro(a)(e)?",
            text: "Una vez eliminado, ¡no podrá recuperar estos registros!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const p = {
                    idusuario: datausuarios.id,
                };
                await eliminarCategoriasTodas(p);
            }
        });
    }
    return (
      <Main>
          <h2>Resetear todo</h2>
        <Container>
            <span>
                ADVERTENCIA!: *esta acción es irreversible, una vez ejecutada se
                eliminaran todos tus registros de movimientos incluso las categorias
                registradas. <br />
                *Se reseteara tambien los saldos acumulados en tus cuentas.
            </span>
            {/* <div className="contentImg">
                <img src={v.logo} />
            </div> */}
        </Container>
          <Btnsave
              titulo="resetear"
              bgcolor="rgba(247, 92, 92, 0)"
              funcion={eliminar}
          />
      </Main>
    );
}
const Main = styled.div`
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`;

const Container = styled.div`
  width: 40%;
  border-radius: 10px;
  border: 2px solid rgba(255, 99, 99, 0.156);
  height: 100%;
  background: rgb(42, 1, 1);
  background: linear-gradient(
    18deg,
    rgba(58, 0, 0, 0.12) 9%,
    rgba(57, 32, 32, 0.3) 100%
  );
  height: 100%;
  padding: 10px;
  gap: 20px;
  /* h1,
p {
  font-family: Quicksand;
} */
  h2 {
    color: rgba(1, 88, 37, 0.72);
    
  }
  span {
    color: rgba(40, 1, 1, 0.568);
    font-size: 120%;
  }
  .contentImg {
    position: absolute;
    bottom: 10;
    left: 1;
    width: 10%;
    opacity: 0.18;
    margin: 0px;
    img {
      width: 100%;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
  
`;
