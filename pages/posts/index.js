import AllPosts from "@/components/posts/all-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 3600
  };
}
