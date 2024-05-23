import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import formatCurrency from "../../utils/money";

const ShippingMethod = () => {
	const { orderInfo, setOrderInfo, selectedMethod, setSelectedMethod } = useContext(AppContext);

	const methodItems = [
		{
			name: "Flat Rate",
			description: "Standard flat rate for all shipments.",
			amount: formatCurrency(1890),
			id: 1,
		},
		{
			name: "Expedited Shipping",
			description: "Expedited shipping to get the shipment in a day or two.",
			amount: formatCurrency(8190),
			id: 2,
		},
		{
			name: "Overnight Shipping",
			description: "An expensive option to get the shipment on the next business day.",
			amount: formatCurrency(14820),
			id: 3,
		},
	];

	const handleMethodSelection = (methodName, methodAmount, methodDescription) => {
		setSelectedMethod({
			name: methodName,
			amount: methodAmount,
			description: methodDescription,
		});
	};

	useEffect(() => {
		setOrderInfo({
			...orderInfo,
			selectedMethod,
		});
	}, [selectedMethod]);

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Method</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content methods-list">
				{/* Using array to make code cleaner */}
				{methodItems.map((item) => (
					<div
						className="method-item"
						key={item.id}
						onClick={() => {
							handleMethodSelection(
								item.name.toLowerCase().replaceAll(" ", "-"),
								item.amount,
								item.description
							);
						}}
					>
						<input
							type="radio"
							name="method"
							onChange={() => {}}
							checked={
								selectedMethod.name === item.name.toLowerCase().replaceAll(" ", "-")
							}
						/>

						<div className="method-description">
							<div className="bold-text-block">{item.name}</div>
							<div className="normal-text-block">{item.description}</div>
						</div>

						<div className="amount">$ {item.amount} USD</div>
					</div>
				))}
			</fieldset>
		</div>
	);
};

export default ShippingMethod;
