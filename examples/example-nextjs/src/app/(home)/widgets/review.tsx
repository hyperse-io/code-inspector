'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, cn } from '@heroui/react';
import { Icon } from '@iconify/react';

export type ReviewType = {
  user: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  rating: number;
  title: string;
  content: string;
};

export type ReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType;

export const Review = ({
  children,
  user,
  title,
  content,
  rating,
  createdAt,
  ...props
}: ReviewProps) => (
  <div {...props}>
    <div className="flex items-center justify-between">
      <Avatar>
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <p className="text-default-900 font-medium">{user.name}</p>
      <p className="text-default-500">
        {new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(createdAt))}
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          const isSelected = i + 1 <= rating;

          return (
            <Icon
              key={i}
              className={cn(
                'text-lg sm:text-xl',
                isSelected ? 'text-warning' : 'text-default-200'
              )}
              icon="solar:star-bold"
            />
          );
        })}
      </div>
    </div>
    <div className="mt-4 w-full">
      <p className="text-default-900 font-medium">{title}</p>
      <p className="text-default-500 mt-2">{content || children}</p>
    </div>
  </div>
);
