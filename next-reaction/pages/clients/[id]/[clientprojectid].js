import { useRouter } from "next/router";

function SelectedClientPage() {
  const router = useRouter();
  
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1> Project Page for a Specifically Selected Client </h1>
    </div>
  );
}

export default SelectedClientPage;
