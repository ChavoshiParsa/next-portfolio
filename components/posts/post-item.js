import Image from "next/image";
import Link from "next/link";

import classes from "styles/posts-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(data).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="/" legacyBehavior>
        <a>
          <div className={classes.Image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
