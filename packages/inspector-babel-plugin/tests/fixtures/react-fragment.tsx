import React, { Fragment } from 'react';

export const Parent = ({ children }: any) => {
  return (
    <div>
      <React.Fragment>
        <div>react dom fragment</div>
      </React.Fragment>
      <Fragment>
        <div>react dom fragment2</div>
      </Fragment>
    </div>
  );
};
