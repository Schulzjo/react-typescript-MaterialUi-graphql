import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import {LaunchListQuery} from "../../generated/graphql";


interface Props {
    data: LaunchListQuery;
}


const PlotLaunchesPerYear: React.FC<Props> = ({data}) => {

    let launch_years = new Array<string>();

    !!data.launches && data.launches.map(
        (launch) =>
            launch && launch.launch_year && (
                launch_years.push(String(launch.launch_year))
            ))

    const launchYearsCount = new Map([...Array.from(new Set(launch_years))].map(
        x => [x, launch_years.filter(y => y === x).length]
    ));

    let launch_year_count_list= Array.from(launchYearsCount, ([year, count]) => ({year, count}));

    return (
        <Paper>
            <Chart
                data={launch_year_count_list}
            >
                <ArgumentAxis/>
                <ValueAxis/>
                <BarSeries
                    valueField="count"
                    argumentField="year"
                />
                <Title text="Launches per Year"/>
            </Chart>
        </Paper>
    )
};
export default PlotLaunchesPerYear;