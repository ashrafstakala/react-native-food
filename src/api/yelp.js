import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer zZ0TqCFMAHaCUxBkWOflQo5bCBSGXckIkOqXW_gRTT_U_a1oqSxNDNtpjnzWxx1oe7PvgMFkNslDxdryOjhba61gjpZE5jaVhm4LupLGf_E6mQCR5UT9nB2d2jySY3Yx',
  },
});
