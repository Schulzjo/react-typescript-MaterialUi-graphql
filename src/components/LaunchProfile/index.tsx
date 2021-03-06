import * as React from 'react';
import LaunchProfile from './LaunchProfile'
import Toolbar from "@material-ui/core/Toolbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useLaunchProfileQuery} from "../../generated/graphql";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface OwnProps {
    id: number;
}

const LaunchProfileContainer: React.FC<OwnProps> = ({id}) => {
    const { data, error, loading, refetch } = useLaunchProfileQuery({ variables: { id: String(id) } });
    const classes = useStyles();

    React.useEffect(() => {
        refetch({ id: String(id) });
    }, [refetch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a flight from the panel</div>;
    }

    return (
        <main className={classes.content}>
            <Toolbar/>
            <LaunchProfile data={data}/>
        </main>
    )
};

export default LaunchProfileContainer;