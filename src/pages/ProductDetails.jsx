import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import Product from "../components/Product";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
console.log(products);
console.log(id);
  // Buscar el producto actual por ID
  const product = products?.find((item) => item.id == parseInt(id));
  // Obtener productos relacionados basados en la categoría del producto actual
  
  useEffect(() => {
    if (product) {
      let allProducts = JSON.parse(localStorage.getItem('allProductsData')) || (products ? products : []);

      localStorage.setItem('allProductsData', JSON.stringify(allProducts));

      console.log(product);

      const form = {
        'user_name': 'usuario123',
        'product_user_input': product.product_name,
        'product_ID': 'product_name',
        'dataset': allProducts,
        'descuento': 20,
        'price_column': 'price',
        'category_discounts': {
          'Carlton London': [5, 20],
          'Denver': [5, 20],
          'Engage': [5, 20],
          'Envy': [5, 20],
          'FOGG': [5, 20],
          'KS WOMAN': [5, 20],
          "LA' French": [5, 20],
          'Ahava': [5, 20],
          'Alpha Skin Care': [5, 20],
          'American Crew': [5, 20],
          'Ariana Grande': [5, 20],
          'Babo Botanicals': [5, 20],
          'Baxter of California': [5, 20],
          'Beast': [5, 20],
          'Beekman 1802': [5, 20],
          'Bliss': [5, 20],
          'boscia': [5, 20],
          'Briogeo': [5, 20],
          'Bushbalm': [5, 20],
          'Buttah Skin': [5, 20],
          'Cetaphil': [5, 20],
          'Clarins': [5, 20],
          'Clinique': [5, 20],
          'Coco & Eve': [5, 20],
          'Da Bomb': [5, 20],
          'Daily Concepts': [5, 20],
          'Dermalogica': [5, 20],
          'Differin': [5, 20],
          'Dionis': [5, 20],
          "Dr Teal's": [5, 20],
        }
  
      }

      axios.post('http://127.0.0.1:5000/recommendations', form)
        .then(response => {
          console.log(response.data.recommended_products);
          localStorage.setItem('allProductsData', JSON.stringify(response.data.all_products));
          localStorage.setItem('recommendationsProductsData', JSON.stringify(response.data.recommended_products));
          setRelatedProducts(response.data.recommended_products)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [product]);

  if (!product) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        Loading..
      </section>
    );
  }

  const { product_name, price, category, image } = product;

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-column items-center">
            <div className="flex-1 text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm mx-auto mb-4"
                src={image}
                alt=""
              />
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {product_name}
              </h1>
              <div className="text-xl font-medium text-blue-500 mb-6">
                $ {price}
              </div>
              <p className="mb-8">{category}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white "
              >
                Add to cart
              </button>
            </div>
            <div className="flex-1 mt-14">
              {/* Mostrar productos relacionados */}
              <h3 className="text-xl font-semibold mb-4 flex justify-center items-center mb-8">
                Te podría gustar
              </h3>
              <div className="flex gap-8 justify-center items-center">
                {relatedProducts.map((relatedProduct) => (
                  <Product product={relatedProduct} products={products} key={relatedProduct.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </>
  );
};

export default ProductDetails;
