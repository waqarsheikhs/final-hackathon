import "./css/style.css"
import Grid from "@mui/material/Grid"
import ListItem from '@mui/material/ListItem';
import { Link, useHistory } from 'react-router-dom'
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { auth, onAuthStateChanged } from '../../confiq/Firebase';
import { useSelector } from "react-redux";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Dashboard() {
    const history = useHistory();
    const store = useSelector(state => state);
    onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
            history.push('/')
        }
    });
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                item xs={9}>
                <Grid className="mt-20" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <ListItem className="orders" button>
                        <Item className="box"><h4>Pending Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button >
                        <Item className="box"><h4>Accepted Orders</h4></Item>
                    </ListItem>
                    <ListItem className="orders" button>
                        <Link to="/orderhistory" className="box"><h4>Orders History</h4></Link>
                    </ListItem>

                </Grid>
            </Grid>
        </>
    )
}