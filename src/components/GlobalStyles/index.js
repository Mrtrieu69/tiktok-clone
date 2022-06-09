import './GlobalStyles.scss';
import PropTypes from 'prop-types';

const GlobalStyles = ({ children }) => {
    return children;
};

GlobalStyles.propTypes = {
    children: PropTypes.node,
};

export default GlobalStyles;
