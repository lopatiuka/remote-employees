import * as React from "react";
import { List, Datagrid, EditButton, TextField } from 'react-admin';


export const CandidateList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="fullName" />
            <TextField source="telephone" />
            <TextField source="vacancie" />
            <TextField source="cvLink" />
            <TextField source="testTaskLink" />
            <TextField source="howKnow" />
            <TextField source="message" />
            <EditButton />
        </Datagrid>
    </List>
);