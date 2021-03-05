import React, { useEffect, useState } from "react";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
import CircularProgress from "@material-ui/core/CircularProgress";
import AnimatedTerm from "../../components/AnimatedTerm";

import { Container, ProductList } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";

function Home() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const response = await api.get("products/");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress size={50} />
      ) : (
        <>
          <iframe
            title="ola"
            width="768"
            height="500"
            src="http://localhost:3000/animatedTerm"
          />
        </>

        // <ProductList>
        //   {products.map((product) => (
        //     <li key={product.id}>
        //       <figure>
        //         <img src={product.image} alt={product.name} />
        //       </figure>
        //       <strong>{product.title}</strong>
        //       <div>
        //         <span>{product.priceFormatted}</span>

        //         <button
        //           type="button"
        //           onClick={() => dispatch(addToCartThunk(product))}
        //         >
        //           <span>Adicionar ao carrinho</span>
        //         </button>
        //       </div>
        //     </li>
        //   ))}
        // </ProductList>
      )}
    </Container>
  );
}

export default Home;
