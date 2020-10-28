import { LOAD_PROFILE } from 'src/actions/profile';
import { bindActionCreators } from 'redux';

export const initialState = {
  nickName: 'initialnickname',
  firstName: 'initialfirstname',
  lastName: 'testlastname',
  email: 'initialemail',
  streetName: 'initialstreetname',
  streetNumber: 'initialstreetnumber',
  town: 'initialtown',
  postcode: 'initialpostcode',
  department: 'initialdepartment',
  country: 'initialcountry',
  loading: true,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return{
        ...state,
        loading: false,
        nickName: action.profileData.nickname,
        lastName: action.profileData.last_name,
        firstName: action.profileData.first_name,
        email: action.profileData.email,
        streetName: action.profileData.street_name,
        streetNumber: action.profileData.street_number,
        town: action.profileData.town,
        postcode: action.profileData.postcode,
        department: action.profileData.department,
        country: action.profileData.country,
      };
    default:
      return state;
  }
};

export default profile;
