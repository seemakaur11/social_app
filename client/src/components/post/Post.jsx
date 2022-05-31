import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Alert from '../layout/Alert';

const Post = ({ getPost, post: { post, loading }, match }) => {
    const { id } = useParams()
    useEffect(() => {
        getPost(id);
    }, [getPost]);

    return loading || post === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <div style={{ marginTop: "100px", marginLeft: "50px" }}>
                <Alert />
                <Link to='/posts' className='btn'>
                    Back to Posts
                </Link>
                <PostItem post={post} showActions={false} />
                <CommentForm postId={post._id} />
                {/* <div className='comments'>
                    {post.comments.map((comment) => (
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            postId={post._id}
                        />
                    ))}
                </div> */}
            </div>
        </Fragment>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
