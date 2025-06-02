import "./Card1.css"
import sample from "../../assets/1742453278959_fgfg1.jpg"
import wishlist from "../../assets/icons/icons8-heart-26 (1).png"
import cartImg from "../../assets/icons/icons8-cart-24.png"
const Card1 = () =>{
    return(
        <>
            <div className="card1">
                <div className="card-top">
                    <div className="wishlist">
                        <img src={wishlist} alt="" />
                    </div>
                    <img src={sample} alt="" />
                </div>
                <div className="card-middle">
                    <div className="productname">Mens casual shirt</div>
                    <div className="productdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos.</div>
                    <div className="price">
                        <div className="current-price">$ 29.99</div>
                        <div className="original-price">$ 39.99</div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="cart-img"><img src={cartImg} alt="" /></div>
                    <div>add to cart</div>
                </div>
            </div>
        </>
    )
}

export default Card1