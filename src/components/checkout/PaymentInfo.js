import React from "react";
import Label from "./Label";

const PaymentInfo = ({ register, errors }) => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Payment Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<Label label={"Card Number *"} />
				{errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}

				<input
					className={`checkout-input ${errors.cardNumber && "error-input"}`}
					type="text"
					placeholder="1234567890"
					{...register("cardNumber")}
					value="1234567890"
				/>

				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={"Expiration date *"} />
						<input
							className={`checkout-input ${errors.expirationDate && "error-input"}`}
							type="text"
							maxLength={5}
							placeholder="MM/YY"
							{...register("expirationDate")}
							value="02/32"
						/>
					</div>

					<div className="checkout-column">
						<Label label={"Security Code *"} />
						<input
							className={`checkout-input ${errors.securityCode && "error-input"}`}
							type="text"
							maxLength={3}
							placeholder="000"
							{...register("securityCode")}
							value="220"
						/>
					</div>
				</div>

				<button className="submit">Submit</button>
			</fieldset>
		</div>
	);
};

export default PaymentInfo;
