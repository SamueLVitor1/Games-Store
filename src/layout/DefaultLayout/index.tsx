import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { ContainerDefault } from "./styles";


export function DefaultLayout(){
  return(
    <ContainerDefault>
      <Header/>
      <Outlet/>
    </ContainerDefault>
  )
}