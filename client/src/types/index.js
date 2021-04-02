import PropTypes from 'prop-types';

export default {
  adaptiveSpacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.exact({
      xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ]),
  adaptiveProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  ]),
};
