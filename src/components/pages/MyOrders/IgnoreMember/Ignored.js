import React from 'react';
import { useGetMyIgnoredMembersQuery } from '../../../../Redux/features/Ignore/ignoreApi';
import IgnoreCard from './cards/IgnoreCard';

const Ignored = () => {
    const {data, isLoading, error } = useGetMyIgnoredMembersQuery({page:1,limit:"", keyword:""});

    return (
        <div>
            {data?.data?.blockedUsers?.map((item) => <IgnoreCard {...{item,useCase:"unignore"}} />)}
        </div>
    );
}

export default Ignored;
