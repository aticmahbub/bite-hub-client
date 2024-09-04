import { useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://endgame-job-task-server.vercel.app/api/products")
        .then((res) => res.json())
        .then(data => setProducts(products));
    }, [products]);
    console.log(products);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;