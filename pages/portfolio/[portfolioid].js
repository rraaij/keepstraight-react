import {useRouter} from "next/router";

const PortfolioItemPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>the Portfolio Item page for {router.query.portfolioid}</h1>
        </div>
    );
};
export default PortfolioItemPage;
