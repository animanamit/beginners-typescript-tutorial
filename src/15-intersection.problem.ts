interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}
interface Return extends User {
  posts: Post[];
}
/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
export const getDefaultUserAndPosts = (): Return => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
