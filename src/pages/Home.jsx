import styled from "styled-components";
import { HomeTemplate, UserAuth, useAuthStore } from "../index";
export function Home() {
    const {signout} = useAuthStore();
    const {user} = UserAuth();
    return (
    <HomeTemplate>
        <h1>bienvenidos {user.full_name}</h1>
        <img src={user.picture}/>
        <button onClick={signout}>Cerrar</button>
    </HomeTemplate>
    );
}
const Container =styled.div`
    height: 100vh;
`;