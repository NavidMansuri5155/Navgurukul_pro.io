import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GrInstagram } from "react-icons/gr";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: "black",
        backgroundImage: "url(https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-blue-geometric-business-card-background-image_239795.jpg)"
    },
    icon: {
        fontSize: "40px",
        color: "black"
    }
}));



function Footer() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root} >
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Button className={classes.icon} size="large" color="primary">
                                <a href="https://github.com/NavidMansuri5155" target="_blank">
                                    <FaGithub />
                                </a>
                            </Button>
                            <Button className={classes.icon} size="large" color="primary">
                                <a href="https://www.linkedin.com/in/nabizada-navid-mansuri-165b921a6/" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </Button>
                            <Button className={classes.icon} size="large" color="primary">
                                <a href="https://www.facebook.com/navid.mansuri.5/" target="_blank">
                                    <FaFacebook />
                                </a>
                            </Button>
                            <Button className={classes.icon} size="large" color="primary">
                                <a href="https://www.instagram.com/nabizada_navid_mansuri/" target="_blank">
                                    <GrInstagram />
                                </a>
                            </Button>
                            <Typography >
                                © Copyright 2021 Mobirise - Navgurukul Pro  Student Template - by NavidMansuri5155
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
