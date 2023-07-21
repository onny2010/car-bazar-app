import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const PaymentResult = () => {
    // http://localhost:3000/result?payment_intent=pi_3M7lbODSbfkSaEB414FQxMah&payment_intent_client_secret=pi_3M7lbODSbfkSaEB414FQxMah_secret_BxeWvHSJCEocA9WoHBtOh7BLg&redirect_status=succeeded

    const p1 = new URLSearchParams(window.location.search).get("payment_intent")
    const p2 = new URLSearchParams(window.location.search).get("payment_intent_client_secret")
    console.log(p1,p2)
    return (
    <div className="pt-5 mt-5">
        <div className="container">
            <div className="col-12 col-lg-6 mx-auto">
                <h5 className="text-center">Payment Successfull & your order hasbeen added</h5>
                <div>
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>data</th>
                        <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>payment_intent</td>
                        <td>{p1.slice(3,(p1.length-3))}</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>payment_intent_client_secret</td>
                        <td>{p2.slice(3,(p1.length-3))}</td>
                        </tr>
                        
                    </tbody>
                    </Table>
                </div>
            </div>
            <div className="text-center">

            <Link className="text-center" to="/">Home</Link>
            </div>
        </div>
    </div>
    )
}
export default PaymentResult;