import styled from "styled-components/native";

const sizeVariant = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = sizeIndex;

  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "4px",
};
