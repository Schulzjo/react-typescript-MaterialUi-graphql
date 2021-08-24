import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import {LaunchProfileQuery} from "../../generated/graphql";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ImageList from '@material-ui/core/ImageList';

interface Props {
    data: LaunchProfileQuery;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        imageList: {
            width: 1200,
            height: 450,
        },
    }),
);

const Content: React.FC<Props> = ({data}) => {
    const classes = useStyles();

    if (!data.launch) {
        return <div>No launch available</div>;
    }
    return (
        <div>
            <Typography paragraph>
                Flight {data.launch.flight_number}:
                <h1>
                    {data.launch.mission_name}
                    {data.launch.rocket &&
                    ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
                </h1>
                <p>{data.launch.details}</p>
            </Typography>
            <div className={classes.root}>
                {!!data.launch.links && !!data.launch.links.flickr_images && (
                    <ImageList rowHeight='auto' className={classes.imageList} cols={3}>
                        {data.launch.links.flickr_images.map((image, i) =>
                            image ? (
                                <img
                                    src={image}
                                    key={image}
                                    alt={`${data.launch?.mission_name} ${i}`}
                                />
                            ) : null,
                        )}
                    </ImageList>
                )}
            </div>
        </div>
    )
};

export default Content;
