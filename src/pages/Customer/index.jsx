import {Component} from "react";
import {styleSheet} from './styles'
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                code: '',
                name: '',
                email: '',
                address: '',
                salary: '',
                contact: ''
            }
        }

    }

    render() {

        function createData(code, name, email, address, salary, contact) {
            return {code, name, email, address, salary, contact};
        }

        const {classes} = this.props
        const rows = [
            createData('C00-001', 'Prageeth', 'prageeth@gamil,com', 'Galle', 20000.0, '0774535741'),
            createData('C00-002', 'Nimal', 'nimal@gamil,com', 'Matara', 18000.0, '0756898958'),
            createData('C00-003', 'Kamal', 'kamal@gamil,com', 'Colombo', 25000.0, '0745895865'),
            createData('C00-004', 'Bandara', 'bandara@gamil,com', 'Kalutara', 15000.0, '0704589658'),
            createData('C00-005', 'Sunil', 'sunil@gamil,com', 'Panadura', 40000.0, '0114858623'),
        ];
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.title_bar}>
                        <Typography variant="h3">
                            Customer Manage
                        </Typography>
                        <Link to="/">
                            <GDSEButton size="small" variant="contained" label="Home" color={"secondary"}
                                        onClick={() => {

                                        }}
                                        style={{marginLeft: '15px', marginTop: '-5px'}}
                            />
                        </Link>

                    </div>
                    <div className={classes.text_form}>
                        <div className={classes.text_field}>
                            <Grid container className={"pt-2"} spacing={3}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Id</Typography>
                                    <TextField id="outlined-basic" placeHolder="Customer Id"
                                               variant="outlined" size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.code = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Name</Typography>
                                    <TextField id="outlined-basic" placeHolder="Customer Name"
                                               variant="outlined"
                                               size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.name = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Email</Typography>
                                    <TextField id="outlined-basic" placeHolder="E-mail"
                                               variant="outlined"
                                               size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.email = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}/>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Address</Typography>
                                    <TextField id="outlined-basic" placeHolder="Address" variant="outlined"
                                               size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.address = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}
                                    />
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Salary</Typography>
                                    <TextField id="outlined-basic" placeHolder="Salary"
                                               variant="outlined" size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.salary = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}
                                    />
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography variant={"subtitle1"}>Customer Contact</Typography>
                                    <TextField id="outlined-basic" placeHolder="Contact"
                                               variant="outlined" size="small"
                                               onChange={(e) => {
                                                   console.log(e.target.value)
                                                   let formData = this.state.formData
                                                   formData.contact = e.target.value
                                                   this.setState({formData})
                                               }}
                                               style={{width: '100%'}}/>
                                </Grid>
                                {/*<Grid item lg={12} md={12} sm={12} xs={12} style={{display: 'flex'}}
                                  justifyContent="flex-end">
                                <GDSEButton size="small" variant="contained" label="save"
                                            onClick={() => {
                                                this.saveItem()
                                            }}
                                />
                            </Grid>*/}
                            </Grid>
                            <Grid container marginTop={"10px"} direction={"row"} alignItems={"center"}
                                  justifyContent={"flex-end"}>
                                <GDSEButton size="small" variant="contained" label="save"
                                            onClick={() => {
                                                this.saveItem()
                                            }}
                                />
                            </Grid>
                        </div>
                        <div className={classes.table_field}>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TableContainer component={Paper}>
                                    <Table sx={{minWidth: 650}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Id</TableCell>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Email</TableCell>
                                                <TableCell align="left">Address</TableCell>
                                                <TableCell align="left">Salary</TableCell>
                                                <TableCell align="left">Contact</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                rows.map((row) => (
                                                <TableRow>
                                                    <TableCell align="left">{row.code}</TableCell>
                                                    <TableCell align="left">{row.name}</TableCell>
                                                    <TableCell align="left">{row.email}</TableCell>
                                                    <TableCell align="left">{row.address}</TableCell>
                                                    <TableCell align="left">{row.salary}</TableCell>
                                                    <TableCell align="left">{row.contact}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styleSheet)(Customer)