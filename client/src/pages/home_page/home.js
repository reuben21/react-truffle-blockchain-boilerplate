import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Home=(account)=> {
    const classes = useStyles();


    return (
        <div style={{
            backgroundColor:"green"
        }}>

        </div>
    );
}

export default Home;
