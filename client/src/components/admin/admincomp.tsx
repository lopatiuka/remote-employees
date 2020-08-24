import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, fetchUtils } from 'react-admin';
import authProvider from './authProvider';
import { VacancieList, VacancieEdit, VacancieCreate } from './vacancie';
import { CandidateList } from './candidates';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const httpClient = (url, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider( 'http://localhost:5000', httpClient );


function AdminComponent( props ) {
  return <Admin authProvider = { authProvider } dataProvider={dataProvider}>
    <Resource name = "vacancies" list = { VacancieList } edit = { VacancieEdit } create = { VacancieCreate } icon = { PostIcon }/>
    <Resource name = "candidates" list = { CandidateList } icon = { UserIcon }/>
     {/* <Resource name="users" list={ListGuesser} />
     <Resource name="posts" list={ListGuesser} /> */}
  </Admin>
}

export default AdminComponent;
