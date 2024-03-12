import axios from 'axios';

const useRecommendation = () => {
  const recommendation = (product, products, mainColumn) => {
    let allProducts = JSON.parse(localStorage.getItem("allProductsData")) || products;

    localStorage.setItem("allProductsData", JSON.stringify(allProducts));

    const form = {
      user_name: "usuario123",
      product_user_input: product.title,
      product_ID: mainColumn,
      dataset: allProducts,
      price_column: "price",
      category_discounts: {
        "Carlton London": [5, 20],
        "Denver": [5, 20],
        "Engage": [5, 20],
        "Envy": [5, 20],
        "FOGG": [5, 20],
        "KS WOMAN": [5, 20],
        "LA' French": [5, 20],
        "Ahava": [5, 20],
        "Alpha Skin Care": [5, 20],
        "American Crew": [5, 20],
        "Ariana Grande": [5, 20],
        "Babo Botanicals": [5, 20],
        "Baxter of California": [5, 20],
        "Beast": [5, 20],
        "Beekman 1802": [5, 20],
        "Bliss": [5, 20],
        "boscia": [5, 20],
        "Briogeo": [5, 20],
        "Bushbalm": [5, 20],
        "Buttah Skin": [5, 20],
        "Cetaphil": [5, 20],
        "Clarins": [5, 20],
        "Clinique": [5, 20],
        "Coco & Eve": [5, 20],
        "Da Bomb": [5, 20],
        "Daily Concepts": [5, 20],
        "Dermalogica": [5, 20],
        "Differin": [5, 20],
        "Dionis": [5, 20],
        "Dr Teal's": [5, 20],
      },
    };

    axios.post("http://127.0.0.1:5000/recommendations", form)
      .then((response) => {
        localStorage.setItem(
          "allProductsData",
          JSON.stringify(response.data.all_products)
        );
        localStorage.setItem(
          "recommendationsProductsData",
          JSON.stringify(response.data.recommended_products)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    recommendation
  }
}

export default useRecommendation