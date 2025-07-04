import { Fragment, useState } from 'react';
import { Chip } from '@heroui/react';
import { Inspector } from '@hyperse/inspector';
import Review from './review/App';
import './index.css';

export const AppPage = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-auto p-12">
      <Inspector
        keys={['$mod', 'i']}
        active={active}
        onActiveChange={setActive}
        onHoverElement={(e) => {
          console.log(e);
        }}
      />
      <Chip color="primary" variant="flat">
        Hyperse
      </Chip>
      <Fragment>
        <span className="text-2xl font-bold">Hyperse Code Inspector</span>
      </Fragment>
      <Review />
    </div>
  );
};
