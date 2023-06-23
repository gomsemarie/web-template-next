'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilRootWrapperProps {
  children: React.ReactNode;
}

function RecoilRootWrapper(props: RecoilRootWrapperProps) {
  const { children } = props;
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;
