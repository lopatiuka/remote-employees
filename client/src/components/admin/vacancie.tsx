import * as React from "react";
import { List, Datagrid, EditButton, TextField, Edit, Create, SimpleForm, TextInput, SelectInput } from 'react-admin';

export const VacancieList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="category" />
            <EditButton />
        </Datagrid>
    </List>
);

export const VacancieEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           <TextInput source="title" />
           <TextInput multiline source="description" />
           <SelectInput source = "category" choices={[
                { id: 'web development', name: 'Web development' },
                { id: 'design', name: 'Design' },
                { id: 'marketing', name: 'Marketing' },
            ]} />
            <TextInput source="image" />
        </SimpleForm>
    </Edit>
);

export const VacancieCreate = props => (
    <Create {...props}>
        <SimpleForm encType="multipart/form-data">
           <TextInput disabled source="id" />
           <TextInput source="title" />
           <TextInput multiline source="description" />
           <SelectInput source="category" choices={[
                { id: 'web development', name: 'Web development' },
                { id: 'design', name: 'Design' },
                { id: 'marketing', name: 'Marketing' },
            ]} />
            <TextInput source = "image"/>
            {/* <ImageInput source="image" label="Related pictures">
            </ImageInput> */}
             </SimpleForm>
    </Create>
)

