import React from 'react';
import axios from 'axios';
import {
  Header, 
  FormCriarPlaylist,
  InputCriar, 
  BotaoCriar,
  ListaPlaylists,
  Footer
} from './Components/Styled';

export default class App extends React.Component {
  state = {
    namePlaylist: "",
    playlists: [],
};

  onChangeNamePlaylist = (event) => {
    this.setState({ namePlaylist: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.namePlaylist,
  };

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
    headers: {
      Authorization: "marcela-militello-jackson"
    }
  })
    .then((resposta) => {
      console.log(resposta);
      alert(`A playlist ${this.state.namePlaylist} foi criada!`);
      this.setState({ namePlaylist: ""});
  })
    .catch((erro) => {
      console.log(erro);
  });
};

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  getAllPlaylists = async () => {
    try {
      const resposta = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: "marcela-militello-jackson"
        }
      });
      this.setState({ playlists: resposta.data.result.list });
    } catch (erro) {
      console.log(erro.message);
    }
  };

  deletePlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId`, {
      headers: {
        Authorization: "marcela-militello-jackson"
      }
    })
    .then((resposta) => {
      console.log(resposta)
      this.getAllPlaylists();
      alert(`A playlist foi deletada!`)
    })
    .catch((erro) => {
      console.log(erro.message);
      alert(`A playlist não foi deletada!`)
    });
  };

  render() {
    return (
      <div>
        <Header>
          <p>Labefy</p>
          <h2>Gerencie suas músicas!</h2> 
        </Header>  
        <FormCriarPlaylist>     
          <label>Crie uma playlist</label>
          <InputCriar 
            value={this.state.namePlaylist}
            onChange={this.onChangeNamePlaylist}
          />
          <BotaoCriar onClick={this.createPlaylist}>Criar</BotaoCriar>
        </FormCriarPlaylist>
        <ListaPlaylists>
          <h2>Suas Playlists:</h2>
            {this.state.playlists.map((playlist) => {
            return (
              <p key={playlist.id}>
                {playlist.name}
                <button onClick={() => this.deletePlaylist(playlist.id)}>
                  {" "}
                  X
                </button>
              </p>
            );
          })}
        </ListaPlaylists>
        <Footer>
          <p>Developed by Marcela Militello - 2020</p>
        </Footer>
      </div>
  );
 }
}
