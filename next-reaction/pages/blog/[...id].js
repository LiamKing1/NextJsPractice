import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1> The Blog Post By ID </h1>
    </div>
  );
}

export default BlogPostsPage;
