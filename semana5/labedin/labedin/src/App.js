import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Perfil from './imagens/perfil.jpg';
import Empresa from './imagens/unicorn.jpg';
import Email from './imagens/email.png';
import Localizacao from './imagens/localizacao.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Marcela Militello Antonelli" 
          descricao="Oi, eu sou a Marcela! Tenho 31 anos e moro em Ribeirão Preto/SP. Sou estudante Dev Web Full Stack na Labenu. Adoro comer e dormir. E unicórnios <3 "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem={Email}
          texto="Email: mmaunicornios@email.com"
          />

        <CardPequeno
          imagem={Localizacao}
          texto="Endereço: Rua dos Unicórnios 123"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando Desenvolvimento Web Full Stack" 
        />
        
        <CardGrande 
          imagem={Empresa} 
          nome="Unicorn Devs" 
          descricao="Fazendo mágica na maior startup unicórnio do país" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
