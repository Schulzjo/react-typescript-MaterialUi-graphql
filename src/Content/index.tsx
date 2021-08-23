import * as React from 'react';
import Content from './Content'
import Toolbar from "@material-ui/core/Toolbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const ContentContainer: React.FC = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Toolbar/>
            <Content/>
        </main>
    )
};

export default ContentContainer;