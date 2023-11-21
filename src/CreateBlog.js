import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Luigi');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsLoading(false);
            history.push('/');
        });
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

                {!isLoading && <button>Save</button>}
            </form>
        </div>
    );
}

export default CreateBlog;