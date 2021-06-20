import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";




const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },

}));



export default function Album() {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                            NAVGURUKUL PRO
                        </Typography>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Navgurukul offers a fully-funded skilling program in software engineering
                            with guaranteed job to youth from low-income families.
                            The program is for one year and is a residential course.
                        </Typography>

                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <a href="https://www.merakilearn.org/" target="_blank">
                                        <Button variant="contained" color="primary">
                                            I AM MERAKI
                                    </Button>
                                    </a>
                                </Grid>

                                <Grid item>
                                    <a href="https://navgurukul.org/" target="_blank">
                                        <Button variant="outlined" color="primary">
                                            MORE
                                </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                {/* CARD  1 */}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/68747323?v=4"
                                    title="navid pic"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Navid Mansuri
                                        </Typography>
                                    <Typography>
                                        I am a web developer, I have front-end web development and major knowledge. For more details click on the button below...
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/NavidMansuri5155" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/nabizada-navid-mansuri-165b921a6/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/navid.mansuri.5/" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/nabizada_navid_mansuri/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* CARD 2 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars2.githubusercontent.com/u/44016225?s=460&v=4"
                                    title="anand patel"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        ANAND PATEL
                                        </Typography>
                                    <Typography>
                                        It is a full stack developer.They have more knowledge of front and back end. And that's how it guides us.
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/anandpatel504" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/anandpatel504/?originalSubdomain=in" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/anand.coder" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/anand.coder/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* CARD 3 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/61968702?v=4"
                                    title="umesh mama"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        UMESH
                                        </Typography>
                                    <Typography>
                                        He is a web developer, and he have front-end web development and major knowledge. For more details click on the button below...
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/umesh8800" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/umesh-shakya-931417201/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/umesh.shakya.9041" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/umesh.shakya.9041/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* CARD 4 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/81804146?v=4"
                                    title="subhash ajemra"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        SUBHASH AJMERA
                                        </Typography>
                                    <Typography>
                                        He is backend developer. and he have knowledge of Python and Databases (mongoDb, mysql)
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/skajmera" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/subhash-ajmera-0a6221212/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/subhash.ajmera.9" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/sk__ajmera____/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* CARD 5 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/77802905?v=4"
                                    title="Parmeshwar Rathod"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        PARMESHWAR RATHOD
                                        </Typography>
                                    <Typography>
                                        He is backend developer. and he have knowledge of Python and Databases (mongoDb, mysql)
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/parmeshwar4321" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/parmeshwar-rathod-6399061a5/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/parmyarathod" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/_p_a_r_m_y_a_.007/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* CARD 6 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://avatars.githubusercontent.com/u/54570265?v=4"
                                    title="shabid  khan"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                        </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" color="primary">
                                        <a href="https://github.com/shabidkhan?tab=repositories" target="_blank">
                                            <FaGithub />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.linkedin.com/in/shabid-khan-5689791b5/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.facebook.com/shabid.07" target="_blank">
                                            <FaFacebook />
                                        </a>
                                    </Button>
                                    <Button size="large" color="primary">
                                        <a href="https://www.instagram.com/shabid.007/" target="_blank">
                                            <GrInstagram />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}