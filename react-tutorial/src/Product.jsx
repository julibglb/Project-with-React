
export default function Product(props) {
    const price = (props.details.price / 100).toFixed(2);
	
    return (
        <div className="product">
            <img className="product-image" width="272" height="300" alt={props.details.name} src={props.details.image} />
            <p className="product-name">{props.details.name}</p>
            <div className="product-price">${price}</div>
        </div>
    );
}
