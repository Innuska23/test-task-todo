import PropTypes from "prop-types";

import { LayoutContainer } from "./Layout.styled";

export const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
