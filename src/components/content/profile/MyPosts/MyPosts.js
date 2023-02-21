import React from 'react'
import m from './myPosts.module.css'
import Post from './Post/Post'
import Preloader from '../../../common/preloader/Preloader'
import NewPostForm from './NewPostForm'


const MyPosts = props => {
    let onAddPost = (post) => {
        props.addPostActionCreator(post);
    }

    const preloaderIfNoPhoto = (!props.userPhoto) ? <Preloader /> : props.userPhoto.photos.small;

    return (
        <div>
            <div className={m.myPosts}>
                <NewPostForm m={m} onAddPost={onAddPost} />
            </div>
            <Post addLike={props.addLikeAC} dislike={props.dislikeAC} posts={props.posts} userPhoto={preloaderIfNoPhoto} />
        </div>
    )
}

export default MyPosts