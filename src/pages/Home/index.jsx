import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FiShoppingCart } from "react-icons/fi";

import { Container, ProductList } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

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
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.title}</strong>
              <div>
                <span>{product.priceFormatted}</span>

                <button
                  type="button"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <span>Adicionar ao carrinho</span>
                </button>
              </div>
            </li>
          ))}
        </ProductList>
      )}
    </Container>
  );
}

export default Home;
