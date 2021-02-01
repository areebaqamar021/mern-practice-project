import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function PostUI({item, index}) {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root} key={index}>
            <CardActionArea>
                <CardMedia>
                    <img width='350px' height='250px' src={item.image} alt=""/>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <br />
        </>
    );
}
export default PostUI;