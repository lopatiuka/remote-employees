import * as React from "react";
import { List, Datagrid, EditButton, TextField } from 'react-admin';
import { vacancieModel, vacanciesStore } from "../../stores/vacancie.store";
import { observer } from "mobx-react";


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

interface IVacancieProps{
    match: any;
}

@observer
export class VacancieEdit extends React.Component<IVacancieProps, {}>{
render(){
    let id = this.props.match.params.id;
    return <form className = "vacancie-form">
            <input type = "text" name = "title" placeholder = "Title" value = { vacancieModel.title }
            onChange = { e => { vacancieModel.setTitle( e.target.value ) } }/>
            <input type = "text" name = "description" placeholder = "Description" value = { vacancieModel.description }
            onChange = { e => { vacancieModel.setDescription( e.target.value ) } }/>
            <select name = "category" value = { vacancieModel.category }
            onChange = { e => { vacancieModel.setCategory( e.target.value ) } }>
                <option>Web development</option>
                <option>Design</option>
                <option>Marketing</option>
            </select>
            <input type = "file" name = "image" placeholder = "Title" onChange = { e => { vacancieModel.setImage(e.target.files[0] ) } }/>
            <input type = "submit"
            onClick = { e => vacanciesStore.editVacancie( e, id, vacancieModel.title, vacancieModel.description, vacancieModel.category, vacancieModel.image ) } value = "Save"/>
        </form>
    }
}

export const VacancieCreate = observer(props => (
    <form className = "vacancie-form">
        <input type = "text" name = "title" placeholder = "Title" value = { vacancieModel.title }
         onChange = { e => { vacancieModel.setTitle( e.target.value ) } }/>
        <input type = "text" name = "description" placeholder = "Description" value = { vacancieModel.description }
         onChange = { e => { vacancieModel.setDescription( e.target.value ) } }/>
        <select name = "category" value = { vacancieModel.category }
         onChange = { e => { vacancieModel.setCategory( e.target.value ) } }>
            <option>Web development</option>
            <option>Design</option>
            <option>Marketing</option>
        </select>
        <input type = "file" name = "image" placeholder = "Title" onChange = { e => { vacancieModel.setImage(e.target.files[0] ) } }/>
        <input type = "submit"
         onClick = { e => vacanciesStore.createVacancie( e, vacancieModel.title, vacancieModel.description, vacancieModel.category, vacancieModel.image ) } value = "Save"/>
    </form>
))

// export const VacancieCreate = props => (
//     <Create {...props}>
//         <SimpleForm encType="multipart/form-data">
//            <TextInput disabled source="id" />
//            <TextInput source="title" />
//            <TextInput multiline source="description" />
//            <SelectInput source="category" choices={[
//                 { id: 'web development', name: 'Web development' },
//                 { id: 'design', name: 'Design' },
//                 { id: 'marketing', name: 'Marketing' },
//             ]} />
//             <ImageInput source="image" label="Related pictures">
//                 <ImageField source = "src"/>
//             </ImageInput>
//              </SimpleForm>
//     </Create>
// )

