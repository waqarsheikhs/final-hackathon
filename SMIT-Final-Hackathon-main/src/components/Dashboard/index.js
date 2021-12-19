import "./css/style.css"
import Grid from "@mui/material/Grid"
import ListItem from '@mui/material/ListItem';
import { Link, useHistory } from 'react-router-dom'
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { auth, onAuthStateChanged } from '../../confiq/Firebase';
import { NavBar } from "..";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Dashboard() {
    const history = useHistory();
    onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
            history.push('/')
        }
    });
    return (
        <>
                <Grid className="mt-20 abc" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <ListItem className="orders" button>
                        <Link to="/pendingorders" className="box">
                            <Item className="box"><h4>Pending Orders</h4></Item>
                        </Link>
                    </ListItem>
                    <ListItem className="orders" button >
                        <Link to="/currentorders" className="box">
                            <Item className="box"><h4>Accepted Orders</h4></Item>
                        </Link>
                    </ListItem>
                    <ListItem className="orders" button>
                        <Link to="/orderhistory" className="box"><h4>Orders History</h4></Link>
                    </ListItem>

            </Grid>
        </>
    )
}