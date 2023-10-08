import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../Style/CartStyle.css"

const CartItems = () => {
	const cartArr = [0,2];
	return (
		<>
			<div className="row justify-content-center m-0">
				<div className="col-md-8 mt-5 mb-5 cartItems ">
					<div className="card">
						<div className="card-header bg-light p-3">
							<div className="card-header-flex">
									<h5 className="text-black m-0">Shopping Cart (01)</h5>
									{
									cartArr.length > 0 ? 
									<Button variant="info" className="mt-0 btn btn-sm">
										<FontAwesomeIcon icon={faTrashCan} /> Empty Cart
									</Button> : ""
                            		 }
							</div>
						</div>
						<div className="car-body p-0">
							{
								cartArr.length === 0 ? <table className="table cart-table mb-0">
											<tbody>
												<tr>
													<td colSpan={6}>
														<div className="cart-empty">
															<i className="fa fa-shopping-cart"></i>
															<p>Your Cart Is Empty</p>
														</div>
													</td>
												</tr>
											</tbody>
								</table> : 
								<table className="table cart-table mb-0 table-responsive-sm">
									<tbody>
										{
											cartArr.map((data,index)=>{
												return(
													<>
														<tr>
															<td>
																<button  className="prdct-delete"><FontAwesomeIcon icon={faTrashCan} /></button> <span>Remove</span>
															</td>
														</tr>
													</>
												)
											})
										}
									</tbody>

								</table>

							}

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItems;
