import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import customer_img from '../../assets/img/customers.png'
import items_img from '../../assets/img/items.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import GDSEButton from "../../components/common/Button";
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                {label: 'The Shawshank Redemption', year: 1994},
                {label: 'The Godfather', year: 1972},
                {label: 'The Godfather: Part II', year: 1974},
                {label: 'The Dark Knight', year: 2008},
                {label: '12 Angry Men', year: 1957},
            ]
        }
    }


    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.nav_bar}>
                    <Grid>
                        <div className={classes.nav_title}>
                            <Typography variant="h2" textAlign={"center"} fontWeight={"bold"}>
                                React Web POS
                            </Typography>
                        </div>
                        <div className={classes.nav_btn}>
                            <Link to="/">
                                <GDSEButton size="small" variant="contained" label="Home"
                                            onClick={() => {

                                            }}
                                            style={{marginLeft: '15px',marginTop:'2px'}}
                                />
                            </Link>
                            <Link to="/customer">
                                <GDSEButton size="small" variant="contained" label="Customer"
                                            onClick={() => {

                                            }}
                                            style={{marginLeft: '15px',marginTop:'2px'}}
                                />
                            </Link>
                            <Link to="/item">
                                <GDSEButton size="small" variant="contained" label="Item"
                                            onClick={() => {

                                            }}
                                            style={{marginLeft: '15px',marginTop:'2px'}}
                                />
                            </Link>
                        </div>
                    </Grid>
                </div>

                <div className={classes.load_container}>
                    <div className={classes.card}>
                        <Grid item lg={12} md={6} sm={6} xm={6}>
                            <Card variant="outlined" sx={{maxWidth: 400}}>

                                <CardHeader
                                    title="Customers"
                                />
                                <CardMedia
                                    component="img"
                                    image={customer_img}
                                    alt="customers"
                                />
                                <CardContent>
                                    <Typography variant="h2" color="text.secondary">
                                        10
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </div>
                    <div className={classes.card}>

                        <Grid item lg={12} md={6} sm={6} xm={6}>
                            <Card variant="outlined" sx={{maxWidth: 400}}>
                                <CardHeader
                                    title="Items"
                                />
                                <CardMedia
                                    component="img"
                                    image={items_img}
                                    alt="Items"
                                />
                                <CardContent>
                                    <Typography variant="h2" color="text.secondary">
                                       25
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styleSheet)(Home)