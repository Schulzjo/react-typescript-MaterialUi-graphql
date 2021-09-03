import * as React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PlotLaunchesPerYear from "./plotlaunchesperyear";
import {useLaunchListQuery} from "../../generated/graphql";


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        center: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: 50,
            justifyContent: 'space-around',

        }
    }),
);


const HomeContainer: React.FC = () => {
    const {data, error, loading} = useLaunchListQuery();
    const classes = useStyles();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return (
        <main className={classes.content}>
            <h1 className={classes.center}>Home</h1>
            <PlotLaunchesPerYear data={data}/>
        </main>
    )
};

export default HomeContainer;