import './TodoItem.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
function TodoItem(props) {
    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    
    return (
        <div class="item" >
            <div className={classes.root} spacing={5}>
                <Paper className={classes.paper} spacing={3}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <div class="row">
                                <div class="col-6">
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={props.itemImage} />
                                    </ButtonBase>
                                </div>
                                <div class="col-4">
                                    <Grid item>
                                        <Typography variant="subtitle1"> 
                                        <Chip
                                            icon={<FaceIcon />}
                                            label="Deletable"
                                            onDelete={handleDelete}
                                            color="secondary"
                                        />
                                        </Typography>
                                    </Grid>
                                </div>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {props.itemTitle}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {props.itemDescription}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-8">
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        size="large"
                                                        className={classes.button}
                                                        startIcon={<DeleteIcon />}
                                                    >
                                                        Finished
                                                    </Button>
                                                </div>
                                                <div class="col-4">
                                                    <IconButton aria-label="EditIcon" size="large">
                                                        <EditIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>

    );
}
export default TodoItem;