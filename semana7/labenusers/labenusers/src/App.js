import React from "react";
import styled from "styled-components";
import FormUsuario from "./components/FormUsuario";
import ListaUsuarios from "./components/ListaUsuarios"

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    paginaAtual: "formUsuario"
  };

trocarPagina = () => {
  this.state.paginaAtual === "formUsuario"
    ? this.setState({ paginaAtual: "listaUsuario" })
    : this.setState({ paginaAtual: "formUsuario" });
};

render() {
  const paginaAtual = () => {
    if (this.state.paginaAtual === "formUsuario") {
      return <FormUsuario />;
    } else if (this.state.paginaAtual === "listaUsuario") {
      return <ListaUsuarios />;
    }
  };

  return (
    <AppContainer>
      {paginaAtual()}
      <button onClick={this.trocarPagina}>Trocar de página</button>
    </AppContainer>
  );
}
}

export default App;