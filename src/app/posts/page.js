'use client'
import { useGetPostQuery, useGetPostsQuery } from "@/Redux/features/postsAPI";
import Post from "./post";

const PostsPage = () => {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery()
    const { data: aPost, isLoading: isLoadingPost, isError: isErrorPost, error: errorPost } = useGetPostQuery(4)

    if (isLoading) return <p className="text-6xl text-center py-10">Data loading...</p>

    if (!isLoading && isError) return <p className="text-6xl text-center py-10 text-red-600">{error?.status}: Something wrong. </p>

    return (
        <div className="flex max-lg:flex-col gap-10 mx-10">
            <div><Post post={aPost} /></div>
            <div className="grid grid-flow-row grid-cols-1 gap-5">{!isLoading && posts?.length ? posts?.map(post => <Post key={post?.id} post={post} />) : 'No data found'}</div>
        </div>
    );
};

export default PostsPage;