'use client'
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

const PostsLayout = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default PostsLayout;