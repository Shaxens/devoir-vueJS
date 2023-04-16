const addedDate = new Date().toISOString().slice(0, 10);


export default {
  firstName: '',
  lastName: '',
  office: '',
  phone: '',
  email: '',
  company: '',
  addressLine1: '',
  addressLine2: '',
  zipCode: '',
  city: '',
  selectedCountry: '',
  country: ['France', 'Allemagne', 'Belgique', 'Luxembourg'],
  addedDate,
}
