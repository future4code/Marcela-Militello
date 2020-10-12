import React from 'react';
import { PostCardContainer, 
        PostCardContent, 
        CardActionArea, 
        CardMedia } from './styled';

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          alt={props.title}
          username={props.username}
          title={props.title}
          text={props.text}
          commentsCount={props.commentsCount}
        //   createdAt={props.createdAt}
        //   userVoteDirection={props.userVoteDirection}
        //   votesCount={props.votesCount}
        />
        <PostCardContent>
            <p>Posted by {props.username}</p>
            <h2>{props.title.toUpperCase()}</h2>
            <h4>{props.text}</h4>
            <p>{props.commentsCount} comentários</p>
            {/* <p>{props.createdAt}</p> */}
            {/* <p>{props.userVoteDirection}</p> */}
            {/* <p>{props.votesCount}</p> */}
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard
