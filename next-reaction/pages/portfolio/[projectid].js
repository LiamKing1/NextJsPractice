import { useRouter } from "next/router";

function PortfolioProjectId() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

  return (
    <div>
      <h1> Porfolio ID Page </h1>
    </div>
  );
}

export default PortfolioProjectId;
