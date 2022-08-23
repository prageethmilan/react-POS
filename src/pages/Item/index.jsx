import {Component} from "react";
import {styleSheet} from './styles'
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packSize: [
                {label: 'Large'},
                {label: 'Medium'},
                {label: 'Small'},
            ],

            formData:{
                code:'',
                name:'',
                price:'',
                packSize:'',
                qtyOnHand:''
            }
        }
    }

    saveItem(){

    }

    render() {

        function createData(code, name, price, packSize, qtyOnHand) {
            return {code, name, price, packSize, qtyOnHand};
        }

        const {classes} = this.props
        const rows = [
            createData('I00-001', 'Dhaal', 150.0, 'Large', 4),
            createData('I00-002', 'Ice cream', 200.0, 'Small', 3),
            createData('I00-003', 'Soap', 350.0, 16.0, 6),
            createData('I00-004', 'Youghurt', 450.0, 'Medium', 2),
            createData('I00-005', 'Fruits', 500.0, 'Large', 9),
        ];
        return (
            <div className={classes.container}>
                <div className={classes.title_bar}>
                    <Typography variant="h3">
                        Item Manage
                    </Typography>
                    <Link to="/">
                        <GDSEButton size="small" variant="contained" label="Home" color={"secondary"}
                                    onClick={() => {

                                    }}
                                    style={{marginLeft: '15px',marginTop:'-5px'}}
                        />
                    </Link>
                </div>
                <div className={classes.text_form}>
                    <div className={classes.text_field}>
                        <Grid container spacing={3} className={"pt-2"}>
                            <Grid item lg={6} md={6} sm={12} xm={12}>
                                <Typography variant={"subtitle1"}>Item Code</Typography>
                                <TextField id="outlined-basic" placeHolder="Item Code"
                                           variant="outlined" size="small"
                                           onChange={(e ) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.code = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xm={12}>
                                <Typography variant={"subtitle1"}>Item Description</Typography>
                                <TextField id="outlined-basic" placeHolder="Name" variant="outlined"
                                           size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.name = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xm={12}>
                                <Typography variant={"subtitle1"}>Item Price</Typography>
                                <TextField id="outlined-basic" placeHolder="Price" variant="outlined"
                                           size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.price = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <Typography variant={"subtitle1"}>Pack Size</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={this.state.packSize}
                                    sx={{width: 300}}
                                    renderInput={(params) => <TextField {...params}/>}
                                    getOptionLabel={
                                        (option) => option.label
                                    }
                                    onChange={(e, value) => {
                                       /* console.log(e.target.value)
                                        let formData = this.state.formData
                                        formData.packSize = e.target.valueOf(e.target)
                                        this.setState({ formData })*/
                                    }}
                                    size="small"
                                    style={{width: '100%'}}
                                />
                            </Grid>
                           {/* <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Description" label="Description"
                                           variant="outlined" size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.description = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}
                                />
                            </Grid>*/}
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <Typography variant={"subtitle1"}>Quantity</Typography>
                                <TextField id="outlined-basic" placeHolder="Qty On Hand" label="Qty On Hand"
                                           variant="outlined" size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.qtyOnHand = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                  justifyContent="flex-end">
                                <GDSEButton size="small" variant="contained" label="save"
                                            onClick={() => {
                                                this.saveItem()
                                            }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.table_field}>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Item Code</TableCell>
                                            <TableCell align="left">Name</TableCell>
                                            <TableCell align="left">Price</TableCell>
                                            <TableCell align="left">Pack Size</TableCell>
                                            <TableCell align="left">Qty On Hand</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            rows.map((row) => (
                                            <TableRow>
                                                <TableCell align="left">{row.code}</TableCell>
                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">{row.price}</TableCell>
                                                <TableCell align="left">{row.packSize}</TableCell>
                                                <TableCell align="left">{row.qtyOnHand}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Item)