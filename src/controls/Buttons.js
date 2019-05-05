import styled, { css } from 'styled-components';
import AppDefaults from '../AppDefaults';

var BtnClr = Object.freeze({
  default: {
    normal: {
      text: '#000000',
      background: '#FFFFFF',
      border: '#848484'
    },
    disabled: {
      text: '#848484',
      background: '#FFFFFF',
      border: '#B2B2B2'
    }
  },

  primary: {
    normal: {
      text: '#FFFFFF',
      background: '#1976D2',
      border: '#1976D2'
    },
    disabled: {
      text: '#FFFFFF',
      background: '#63A4ff',
      border: '#1976D2'
    }
  },

  hint: {
    normal: {
      text: '#1976D2',
      background: '#ffffff',
      border: 'none'
    },
    disabled: {
      text: '#848484',
      background: '#ffffff',
      border: 'none'
    }
  }
});

const buttonFontSize = AppDefaults.constants.font.sizes.normal;
const buttonHintFontSize = AppDefaults.constants.font.sizes.normal;
const buttonBorderSize = '1px';

const Button = styled.button`
  background: ${BtnClr.default.normal.background};
  border: ${buttonBorderSize} solid ${BtnClr.default.normal.border};
  border-radius: 5px;
  color: ${BtnClr.default.normal.text};
  flex-grow: 1;
  padding: 0.8em 1.2em;
  box-shadow: none;

  text-align: center;
  font-size: ${buttonFontSize}
  font-weight: 600;

  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:active,
  &:hover {
    box-shadow: 0px 5px 10px -4px rgba(153,153,153,1);
  }

  &:disabled {
    color: ${BtnClr.default.disabled.text}
    border: ${buttonBorderSize} solid ${BtnClr.default.disabled.border};
    box-shadow: none;
    cursor: not-allowed;
  }

  ${props => props.primary && css`
    background: ${BtnClr.primary.normal.background};
    border: ${buttonBorderSize} solid ${BtnClr.primary.normal.border};
    color: ${BtnClr.primary.normal.text};

    &:disabled {
      background: ${BtnClr.primary.disabled.background}
      border: ${buttonBorderSize} solid ${BtnClr.primary.disabled.border};
      color: ${BtnClr.primary.disabled.text}
    }
  `}
`;

const HintButton = styled(Button)`
    background: ${BtnClr.hint.normal.background};
    border: ${BtnClr.hint.normal.border};
    color: ${BtnClr.hint.normal.text};

    font-size: ${buttonHintFontSize}
    font-weight: 500;

    &:hover {
      box-shadow: none;
    }
`;

export { Button, HintButton };