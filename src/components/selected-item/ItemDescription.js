import React from "react";
import { Link } from "react-router-dom";

const ItemDescription = ({ productName, productPrice, productType }) => {
	return (
		<>
			<Link
				to={`/shop/${productType.toLowerCase()}`}
				className="item-category"
			>
				<p className="category-title">{productType}</p>
			</Link>
			<h2>{productName}</h2>
			<div className="price">$ {productPrice} USD</div>
		</>
	);
};

export default ItemDescription;
