import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {db, doc, updateDoc} from '../../confiq/Firebase';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ButtonText,order}) {
  const [open, setOpen] = React.useState(false);
  const [qty, setQty] = React.useState(order.quantity);
  const [delivered, setDelivered] = React.useState(order.deliveredOrder);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const SaveChanges = async () => {
    const orderRef = doc(db, "orders", order.orderId);
    await updateDoc(orderRef, {
        quantity: qty,
        deliveredOrder:delivered
    });
    handleClose();
  }
  return (
    <div>
      <Button onClick={handleOpen}>{ButtonText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>Order Id  : {order.orderId}</p>
            <p>Order Date : {order.orderDate}</p>
            <p>Project Name : {order.projectName}</p>
            <p>Site Address : {order.siteAddress}</p>
            <p>Brand : {order.brand}</p>
            <p>Brand Type :{order.brandType}</p>
            <p>Quantity : <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} /></p>
            <p>Delivered Quantity : <input type="number" value={delivered} onChange={(e)=>setDelivered(e.target.value)} /></p>
            <p>Remaining Quantity : {Number(order.quantity)-Number(order.deliveredOrder)}</p>
            <p>Order Status : {order.orderStatus}</p>
          </Typography>
          <Button onClick={SaveChanges}>Save Changes</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}