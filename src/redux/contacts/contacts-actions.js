import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
// fulfilled
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
// rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
