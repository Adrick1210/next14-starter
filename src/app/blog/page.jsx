import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postcard/postCard";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
   // with a API
  // const posts = await getData();

  // Without a API
  const posts = await getPosts();
  
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
