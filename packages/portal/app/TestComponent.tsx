/* ------------------------------------------------------------------------------------------------------------------------------------------
 * TopMenu.tsx
 * WRITER : 최정근
 * DATE : 2022-12-19
 * DISCRIPTION : 상단메뉴
 * TYPE : Container
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
'use client';

import React from 'react';
import styled from '@emotion/styled';
const Button = styled.button`
  color: hotpink;
`;

interface TestComponentProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

function TestComponent({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TestComponentProps) {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      data-component="testComponent"
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      {label}
      <style jsx={true}>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
}

namespace TestComponent {}

export default TestComponent;
