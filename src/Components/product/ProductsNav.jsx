import Rings from "../../assets/DiamondRing.jpg";
import './ProductsNav.css'

const ProductsNav = () => {
  return (
    <div className="product-navbar">
      <ul>
        <li>
          <h1>Gold</h1>
          <div className="gold-header">
            <p>Bangles</p>
            <p>Choker set</p>
            <p>Mangalsutra</p>
            <p>Necklace</p>
            <p>Ranihar</p>
          </div>
        </li>
        <li>
          <h1>Diamond</h1>
          <div className="Diamond-header">
            <p>Earrings</p>
            <p>Rings</p>
            <p>Engagement pins</p>
            <p>Nosepin</p>
            <p>Pendants</p>
            <p>Bracelets</p>
            <p>Necklace</p>
            <p>Mangalsutra</p>
            <p>Lumiere</p>
            <p>Collections</p>
          </div>
        </li>
        <li>
          <h1>Sliver</h1>
          <div className="Sliver-header">
            <p>Jewellery</p>
            <p>Utensils</p>
          </div>
        </li>
        <li>
          <h1>New Arrival</h1>
          <div className="new-header">
            <img src={Rings} alt="Rings" />
            <p>Lumiere collections</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductsNav;
