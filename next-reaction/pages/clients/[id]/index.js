import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function loadProjHandler() {
    // <h1> Loading Data... </h1>
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      // the line below could be made to fit every object with an array of things to map and using dot notation.
      query: { id: "lKing", clientprojectid: "projecta" },
      // or
      // router.push("/clients/lKing/projecta ");
    });
  }

  return (
    <div>
      <h1> Client Projects </h1>
      <button onClick={loadProjHandler}> Load Project A </button>
    </div>
  );
}

export default ClientProjectsPage;
