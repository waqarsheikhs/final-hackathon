import NavBar from "../NavBar"
import {useEffect,useState} from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {db,onSnapshot,query,collection,where} from '../../confiq/Firebase';

// function createData(orderId, brand, brandType, projectName, plotSize, siteAddress,contactPerson,contactNum,quantity,rate,deliveredOrder,orderStatus,history) {
//   return {
//     orderId,
//     brand,
//     brandType,
//     projectName,
//     plotSize,
//     siteAddress,
//     contactPerson,
//     contactNum,
//     quantity,
//     rate,
//     deliveredOrder,
//     orderStatus,
//     history
//   };
// }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {/* {row.orderId} */}
          99999
        </TableCell>
        <TableCell align="right">{row.orderDate}</TableCell>
        <TableCell align="right">{row.projectName}</TableCell>
        {/* <TableCell align="right">{row.plotSize}</TableCell> */}
        {/* <TableCell align="right">{row.siteAddress}</TableCell> */}
        <TableCell align="right">{row.brand}</TableCell>
        <TableCell align="right">{row.brandType}</TableCell>
        {/* <TableCell align="right">{row.contactPerson}</TableCell> */}
        {/* <TableCell align="right">{row.contactNum}</TableCell> */}
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.rate}</TableCell>
        <TableCell align="right">{row.orderStatus}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
                <p>Plot Size : {row.plotSize}</p>
                <p>Site Address : {row.siteAddress}</p>
                <p>Contact Person Name : {row.contactPerson}</p>
                <p>Contact Person Number : {row.contactNum}</p>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Delivered Quantity</TableCell>
                    <TableCell align="right">Remaining Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history?.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.deliveredQty}</TableCell>
                      <TableCell align="right">{row.quantity-historyRow.deliveredQty}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId:PropTypes.string.isRequired, 
    brand:PropTypes.string.isRequired, 
    brandType:PropTypes.string.isRequired, 
    projectName:PropTypes.string.isRequired, 
    plotSize:PropTypes.string.isRequired, 
    siteAddress:PropTypes.string.isRequired,
    contactPerson:PropTypes.string.isRequired,
    contactNum:PropTypes.string.isRequired,
    quantity:PropTypes.number.isRequired,
    rate:PropTypes.number.isRequired,
    orderStatus:PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        deliveredOrder:PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

function CollapsibleTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order Id</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell align="right">Project Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Brand Type</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Order Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default function CurrentOrders(){
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
    return(
        <>
        <NavBar/>
        <h1>Current Orders</h1>
        <CollapsibleTable rows={pendingOrders} />
        </>
    )
}