import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Q1. What is context API?</h1>
            <p>Context API is a React API that can solve a number of difficulties with state management and how state is passed to components in modern apps. Instead of adding a state management library in the project, which will eventually degrade performance and increase bundle size, Context API can be used to solve the problem and be OK with it. Without having to manually pass data through props, the Context API can be used to communicate data with different components. For example, the Context API is appropriate for the following use cases: theming, user language, authentication, and so on.
            </p>
            <h1>Q2.What is Semantic Tags?</h1>
            <p>The purpose of the HTML element is clearly defined by semantic tags. It also specifies the sort of content that should be included in the element. header, footer, and article are considered as semantic elements because they clearly state their purpose and the type of content they should contain. The following new HTML5 semantic tags can be used to arrange a document in a meaningful way:header,nav,article,section,aside,footer.Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
        </div>
    );
};

export default Blog;