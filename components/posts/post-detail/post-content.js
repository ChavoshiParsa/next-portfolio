import classes from "styles/post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
