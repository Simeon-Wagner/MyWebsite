import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import './displayReadMe.css'
/*
function ReadMeComponent({file_name}) {
    const [post, setPost] = useState('');
  
          useEffect(() => {

        const markdownFilePath =`../../posts/${file_name}`;
        import(markdownFilePath.toString())
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
        })
        .catch(err => console.log);
        });

        useEffect(() => {
            fetch(markdownFilePath)
              .then(response => response.text())
              .then(text => setMarkdown(text));
          }, [markdownFilePath]);
        
    
    return (
        <div className="md-container">
            <h1></h1>
        <Markdown>
            {post}
        </Markdown>
        </div>
    );

}
 
export default ReadMeComponent;
*/

function ReadMeComponent(file_name) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fileExists = fetch(file_name)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, [file_name]);
  
  return (
    <div>
      

      <div className="md-container">
            <h1>{file_name}</h1>
            <Markdown source={markdown} />
        </div>
    </div>
  );
}

export default ReadMeComponent;