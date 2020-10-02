import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToFeed } from '../../routes/Coordinator';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import useGetPostDetail from '../../hooks/useGetPostDetail';
import { OnePostContainer, ScreenContainer } from './styled'

const PostPage = () => {
    useProtectedPage()

    const {id} = useParams()
    const post = useGetPostDetail([], `/posts/${id}`)[0]
      
    const renderPost = () => (
          <ScreenContainer>
            <OnePostContainer>
              <p>{post.username}</p>
              <p>{post.text}</p>
              {/* <p>{post.numerodecomentarios}</p>
              <p>{post.curtidas}</p> */}
            </OnePostContainer>
          </ScreenContainer>
        )
      
        return (
          <>
            {/* <button onClick={() => goToFeed(history)}>
                VOLTAR
            </button> */}
            {post ? renderPost() : <p>Carregando...</p>}
          </>
        )
      }

export default PostPage





