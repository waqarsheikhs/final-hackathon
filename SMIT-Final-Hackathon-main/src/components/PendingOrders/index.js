import { useEffect, useState } from "react";
import { db, collection, query, where, onSnapshot } from "../../confiq/Firebase";
import { DenseTable } from '../index';
import "./css/style.css"
import Grid from "@mui/material/Grid"
import NavBar from "../NavBar";


export default function PendingOrders() {
    const [pendingOrders, setPendingOrder] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "orders"), where("orderStatus", "==", "pending"));
        onSnapshot(q, (querySnapshot) => {
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setPendingOrder(orders);
        });
    }, [])
    return (
        <>
                <Grid className="mt-20 table" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <div className="pendingDiv">
                        <h1>Pending Orders</h1>
                    </div>
                    <div className="pendingDiv">
                        <DenseTable rows={pendingOrders} />
                    </div>
                </Grid>


        </>
    )
}