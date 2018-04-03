/**
 * Created by Moham on 03/04/2018.
 */

import * as React from 'react';
import {UserSelector} from './UserSelector';
import {TaskList} from './TaskList';

export const Dashboard = (props) => {
    return (
        <div>
            Tasks Dashbaord
            <UserSelector/>
            <TaskList/>
        </div>
    );
};