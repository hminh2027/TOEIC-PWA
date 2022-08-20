import React from 'react';

const TestDetail = () => {
  return <div>Test</div>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch('https://.../posts');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default TestDetail;
