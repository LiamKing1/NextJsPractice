import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "lAllen", name: "Liam Allen" },
    { id: "lKing", name: "Liam King" },
  ];

  return (
    <div>
      <h1> Client Page </h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
            {/* <Link href={`/clients/${client.id}`}> {client.name} </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
