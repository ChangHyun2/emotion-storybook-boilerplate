import { forwardRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;

  &,
  a,
  span {
    text-decoration: none;
  }
`;
const Button2 = styled(Button)`
  background-color: red;

  &,
  a,
  span {
    color: ${(props) => (props.disabled ? '#333' : '#fff')};
  }
`;

export default forwardRef(function Button(props, ref) {
  const ds = [];

  if (props.disabled) {
    ds.push('background-color: grey;');
  }

  return (
    <Button2
      ref={ref}
      css={css`
        ${ds.join('')}
      `}
      {...props}
    >
      {props.children}
    </Button2>
  );
});
