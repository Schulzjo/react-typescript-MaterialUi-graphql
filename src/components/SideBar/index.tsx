import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import SideBar from "./SideBar";


const SideBarContainer: React.FC  = (props) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <SideBar data={data} {...props} />;
};

export default SideBarContainer;