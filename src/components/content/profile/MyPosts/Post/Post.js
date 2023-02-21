import React from 'react'
import m from './post.module.css'
import { FcLike, FcDislike } from 'react-icons/fc';
import noPhoto from '../../../../../images/noUser.png'

const Post = (props) => {
    return (
        <>
            {
                props.posts.map(post => {
                    return (
                        <div key={post.id} >
                            <div className={m.outPosts}>
                                <div>
                                    {!props.userPhoto ? <img src={noPhoto} alt='NO DATA' /> : <img src={props.userPhoto} alt='NO DATA' />}
                                </div>
                                <div>
                                    <p>{post.message}</p>
                                </div>
                            </div>
                            <div className={m.divLikes}>
                                <div className={m.center}>
                                    <div>
                                        <button onClick={() => props.addLike(post.id)} className={m.buttonLike}><FcLike /></button>
                                    </div>
                                    <div>
                                        {post.likesCount}
                                    </div>
                                </div>
                                <div className={m.center}>
                                    <div>
                                        <button onClick={() => props.dislike(post.id)} className={m.buttonDislike}><FcDislike /></button>
                                    </div>
                                    <div>{post.dislikeCount}</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Post