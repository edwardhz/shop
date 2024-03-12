import React from "react";
import Product from "./Product";

const ProductsRecommendation = ({ title, products }) => {
  const allProductsData =
    JSON.parse(localStorage.getItem("allProductsData")) || [];

  return (
    <div>
      <h2 className="text-2xl font-bold pt-[80px] mb-12 ml-[20%]">{title}</h2>
      <div className="flex w-[1600px] mx-auto justify-center gap-[15px]">
        {products.map((product) => (
          <Product
            product={product}
            products={allProductsData}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsRecommendation;
