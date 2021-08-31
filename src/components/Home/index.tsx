import * as React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        center: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: 200,
            justifyContent: 'space-around',

        }
    }),
);


const HomeContainer: React.FC = () => {
    const classes = useStyles();


    return (
        <main className={classes.content }>
            <h1 className={classes.center }>Home</h1>
        </main>
    )
};

export default HomeContainer;