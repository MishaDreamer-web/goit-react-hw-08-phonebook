import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export function addContact(contact) {
  return axios.post(`/contacts`, contact).then(({ data }) => data);
}

export function deleteContact(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}
