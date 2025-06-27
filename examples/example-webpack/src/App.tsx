import { Fragment } from 'react';
import { Chip } from '@heroui/react';
import Review from './review/App';
import './index.css';

export const AppPage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-auto p-12">
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
