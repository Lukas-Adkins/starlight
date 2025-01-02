const formatPrice = (price) => {
    if (!price || isNaN(price)) return "N/A";
    return price.toLocaleString("en-US");
  };

  export default formatPrice;