import { withStyles } from '@mui/styles';
import { Component } from 'react';
import not_found from '../../assets/img/not_found.jpeg';

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '10px'
    }
})


class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img__container}>
                    <img src={not_found} alt="" />
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(NotFound)