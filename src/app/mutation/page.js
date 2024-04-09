'use client'
import { useSetPostMutation } from "@/Redux/features/postsAPI";
import { useAppDispatch } from "@/Redux/hooks/hooks";
import { useForm } from "react-hook-form";

const MutationPage = () => {
    const dispatch = useAppDispatch()
    const [ setPost, { isLoading, isError, isSuccess, isUninitialized, data: setPostResponse } ] = useSetPostMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log('This is data from form: ', data, { isLoading, setPostResponse })
        // const post = await data
        /**
         * Uncaught (in promise) Error: Actions must be plain objects. Use custom middleware for async actions.
    at Object.performAction (<anonymous>:1:41503)

    * solve: omit dispatch()
         */
        // dispatch(setPost({ ...data }))
        setPost({ ...data })
    }

    return (
        <div className="border max-w-2xl w-full p-5 rounded-md">
            <h1 className="text-xl text-center mb-5">Post a New Post</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 justify-stretch text-black">
                <div>
                    <div className="text-sm font-mono">
                        <label htmlFor="userId">Author</label>
                    </div>
                    <select defaultValue="1" className="w-full rounded-md py-3 px-5" {...register('userId', { required: true })} >
                        <option value="1">Md. Neamul Hoqe</option>
                        <option value="2">Md. Hasan Mia</option>
                        <option value="3">Md. Bashar Ahmed</option>
                        <option value="4">Md. Jamil Hasan</option>
                    </select>
                    {errors.userId && <p>Author is required.</p>}
                </div>
                <div>
                    <div className="text-sm font-mono">
                        <label htmlFor="title">Title</label>
                    </div>
                    <input className="w-full rounded-md py-3 px-5" {...register('title', { required: true })} placeholder="Title your post" />
                    {errors.title && <p>Title is required.</p>}
                </div>
                <div>
                    <div className="text-sm font-mono">
                        <label htmlFor="body">Post</label>
                    </div>
                    <textarea rows={5} className="w-full rounded-md py-3 px-5" {...register('body', { required: true })} placeholder="Write your post here..." />
                    {errors.body && <p>Body is required.</p>}
                </div>
                <div className="flex justify-end mt-5">
                    <button type="submit" className="border px-5 py-2 rounded-md text-white hover:bg-cyan-50 hover:text-black">Post</button>
                </div>
            </form>
        </div>
    );
};

export default MutationPage;