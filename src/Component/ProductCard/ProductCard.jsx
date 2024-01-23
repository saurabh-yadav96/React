import "./ProductCard.css"

function ProductCard(props){
    return(
        <div className="ProductCard">
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
        </div>
    );
}
export default ProductCard;