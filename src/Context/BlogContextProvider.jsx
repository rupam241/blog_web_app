import { useState } from 'react';
import BlogContext from '/src/Context/BlogContext.js'; // Import the default export



const BlogContextProvider = ({ children }) => {  // Accept children as props
    const [value, setValue] = useState(0);

    return (
        <BlogContext.Provider value={{ value, setValue }}> {/* Capital P in Provider */}
            {children}  {/* Render the children */}
        </BlogContext.Provider>
    );
}

export default BlogContextProvider;
