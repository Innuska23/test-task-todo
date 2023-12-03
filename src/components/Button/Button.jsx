import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";
import { Colors } from "../../constants/theme";

export const Button = ({ children, color = Colors.primary, ...props }) => {
  return (
    <ButtonStyled $color={color} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(Colors)),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
