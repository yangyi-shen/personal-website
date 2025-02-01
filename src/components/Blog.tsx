import React from "react";

// will need to be manually updated, hope to automate this soon
const posts = [
    {
        title: 'Learning C and writing a password generator',
        date: '2025-01-31',
        url: 'https://blog.yyshen.com/learning-c-and-writing-a-password-generator/'
    }
]

const Blog:React.FC = () => {
    return (
        <section className="p-4 mb-12">
            <p className="text-3xl font-bold mb-6">Blog</p>
            {
                posts.map(post => (
                    <div className="flex gap-8">
                        <p>{post.date}</p>
                        <a className="underline" href={post.url} target="_blank">{post.title}</a>
                    </div>
                ))
            }
        </section>
    )
}

export default Blog