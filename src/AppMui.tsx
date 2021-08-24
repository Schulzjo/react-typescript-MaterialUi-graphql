import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBarContainer from "./components/SideBar";

import ContentContainer from "./components/Content";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);

export default function ClippedDrawer() {
    const classes = useStyles();

    const [id, setId] = React.useState(1);
    const handleIdChange = React.useCallback(newId => {
        setId(newId);
    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideBarContainer handleIdChange={handleIdChange}/>
            <ContentContainer id={id}/>
        </div>
    );
}
