import React, {useState, useEffect} from "react";

import Markdown from "markdown-to-jsx";

function ReadMeComponent({file_name}) {
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../../posts/blog/markdowns/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
        })
        .catch(err => console.log);

    });

    return (
        <>
        <Markdown>
            {post}
        </Markdown>
        </>
    );

}
 
export default ReadMeComponent;