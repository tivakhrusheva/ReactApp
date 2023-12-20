import styled from "styled-components";

// For styling any nested component, Overlay use the styled method.
// This method works perfectly on all of your any third-party component, as long as they attach the passed className prop to a DOM element.
// Here an example: https://gist.github.com/Miniplop/80b042d1b44293329ef7332fd47b770c

// Nested component imports
import { MonitorCartSmall, IconCancel } from "components";

export const CartSection = styled.div`
  background-color: ${props => props.theme.colors.primary};
  overflow: hidden;
  border-radius: 4px;
  padding: 24px 66px 24px 40px;
  box-shadow: 0 1px 13px 0
    ${props => props.theme.colors.transparentBlack};
  display: flex;
  align-items: center;
`;
export const RelativeWrapperOne = styled.div`
  margin-right: 20px;
  position: relative;
`;
export const StyledMonitorCartSmall = styled(
  MonitorCartSmall
)`
  position: relative;
`;
export const StyledIconCancel = styled(IconCancel)`
  position: absolute;
  left: -10px;
  top: -4px;
`;
export const LcdMonitor = styled.p`
  color: ${props => props.theme.colors.text2};
  font-family: ${props =>
    props.theme.fonts.title16pxRegular.family};
  font-size: ${props =>
    props.theme.fonts.title16pxRegular.size};
  font-weight: ${props =>
    props.theme.fonts.title16pxRegular.weight};
  line-height: ${props =>
    props.theme.fonts.title16pxRegular.lineHeight};
  &:not(:last-of-type) {
    margin-right: 177px;
  }
`;
export const Price = styled.p`
  color: ${props => props.theme.colors.text2};
  margin-right: 635px;
  font-family: ${props =>
    props.theme.fonts.title16pxRegular.family};
  font-size: ${props =>
    props.theme.fonts.title16pxRegular.size};
  font-weight: ${props =>
    props.theme.fonts.title16pxRegular.weight};
  line-height: ${props =>
    props.theme.fonts.title16pxRegular.lineHeight};
`;
