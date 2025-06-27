'use client';

import { Fragment } from 'react';
import { Chip } from '@heroui/react';
import { CardReview } from './widgets/card-review';
import reviews from './widgets/reviews';

export default function Pages() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-auto p-12">
        <Chip color="primary" variant="flat">
          Hyperse
        </Chip>
        <Fragment>
          <span className="text-2xl font-bold">Hyperse Code Inspector</span>
          <section className="mx-auto w-full max-w-6xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {reviews.map((review, index) => (
                <CardReview key={index} {...review} />
              ))}
            </div>
          </section>
        </Fragment>
      </div>
    </>
  );
}
