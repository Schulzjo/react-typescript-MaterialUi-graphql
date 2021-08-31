import * as React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {LaunchListQuery} from "../../generated/graphql";
import {navigate} from "hookrouter";

const drawerWidth = 240;
const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
    }),
);



interface Props {
    data: LaunchListQuery;
}


const SideBar: React.FC<Props> = ({data}) => {
    const classes = useStyles()
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        {!!data.launches &&
                        data.launches.map(
                            (launch, i) =>
                                launch && launch.mission_name && launch.launch_year && (
                                    <ListItem button key={i} onClick={() => navigate(`/lp/${launch.flight_number}`)}>
                                        <ListItemIcon> <FlightTakeoffIcon/> </ListItemIcon>
                                        <ListItemText  primary={launch.launch_year + " " + launch.mission_name}/>
                                    </ListItem>
                                ),
                        )}
                    </List>
                    <Divider/>
                </div>
            </Drawer>
        </div>
    )
};


export default SideBar;
