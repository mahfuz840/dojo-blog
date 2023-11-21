import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Luigi');

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author};
    };

    return (
        <div className="create">
            <h2>Create a blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Content</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                  
                <label>Author</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                </select>

                <button>Save</button>
            </form>
        </div>
    );
}

export default CreateBlog;