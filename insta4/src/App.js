import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post2/Post2';
import Post3 from './components/Post3/Post3';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>

        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      <Post2
          nomeUsuario2={'Joaozinho'}
          fotoUsuario2={'https://picsum.photos/200/50'}
          fotoPost2={'https://picsum.photos/250/150'}
        />

      <Post3
          nomeUsuario3={'Renatinho'}
          fotoUsuario3={'https://picsum.photos/51/51'}
          fotoPost3={'https://picsum.photos/212/155'}
        />
      </MainContainer>

      
    );
  }
}

export default App;
