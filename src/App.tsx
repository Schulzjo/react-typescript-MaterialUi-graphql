import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBarContainer from "./components/SideBar";
import {useRoutes, navigate} from 'hookrouter';

import LaunchProfileContainer from "./components/LaunchProfile";
import HomeContainer from "./components/Home";
import {Link, ThemeProvider} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#303030"
        },
        secondary: {
            main: "#fafafa"
        }
    }
})


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

    const routes = {
        '/': () => <HomeContainer/>,
        '/home': () => <HomeContainer/>,
        '/lp/:id': ({id}: { [_: string]: any }) => <LaunchProfileContainer id={id}/>
    };

    const routeResults = useRoutes(routes);

    const classes = useStyles();


    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography noWrap>
                            <Link color="inherit" variant="h5" component="button" onClick={() => navigate('/')}>
                                Home
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SideBarContainer/>
                {routeResults || <h1>PAGE NOT FOUND</h1>}
            </div>
        </ThemeProvider>
    );
}
