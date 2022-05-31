import Link from "next/link";

const ClientsPage = () => {
    return (
        <div>
            <h1>the Clients page.</h1>
            <ul>
                <li>
                    <Link href="/clients/max">Maximilian</Link>
                </li>
            </ul>
        </div>
    );
};
export default ClientsPage;
