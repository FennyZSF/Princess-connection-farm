import React from 'react'
import Account from "pages/account"
import Schedule from 'pages/schedule'
import ScheduleEdit from 'pages/schedule/edit'
 
export default [
    {
        path:"/account",
        component: Account
    },
    {
        path:"/schedule",
        component: Schedule
    },
    {
        path:"/schedule/edit/:id",
        component: ScheduleEdit
    },
]