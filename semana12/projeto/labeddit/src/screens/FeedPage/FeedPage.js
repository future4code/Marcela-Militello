import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useHistory } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData'
import PostCard from './PostCard';
import { goToPosts } from '../../routes/Coordinator';
import { AddPostButton, FeedContainer } from './styled';

const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()
    const postsList = useRequestData([])
    const posts = postsList.posts
      
    const renderPosts = () => {
        return(
          posts.map((item) => {
            return (
              <PostCard
                key={item.post_id}
                onClick={() => goToPosts(history, item.post_id)}
                username={item.username}
                title={item.title}
                text={item.text}
                commentsCount={item.commentsCount}
                // createdAt={item.createdAt}
                // userVoteDirection={item.userVoteDirection}
                // votesCount={item.votesCount}
                
              />
            )
          })
        )
      }
      
        return (
          <>
            <FeedContainer>
              {posts && posts.length > 0 ? renderPosts() : <div>Carregando...</div>}
            </FeedContainer>
            {/* <AddPostButton onClick={() => goToAddPost(history)}>
              <Add/>
            </AddPostButton> */}
      
          </>
        )
      }
      
export default FeedPage


