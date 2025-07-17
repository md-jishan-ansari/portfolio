
import { cn } from '@/lib/utils';
import React from 'react';

interface TimelineItem {
  year: string;
  title?: string;
  description?: string;
}

interface TimelineProps {
  children?: React.ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
  return (
    <div className={cn('relative my-8', className)}>
      {/* Timeline line */}

      <div className="">
        {children}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title?: string;
  children?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, children }) => {
  return (
    <div className="flex gap-4 group">
      {/* Year text */}
      <p className='m-0 text-lg font-medium w-20 min-w-48 max-w-48 max-md:hidden'>{year}</p>

      {/* Empty circle */}
      <div className='relative'>
        <div className="absolute left-[50%] translate-x-[-50%] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
        <div className="relative z-10 flex mt-1 h-4 w-4 items-center justify-center rounded-full border-4 border-primary bg-background" />
      </div>

      {/* Content */}
      <div>
        <p className='m-0 text-lg font-medium w-20 min-w-48 max-w-48 md:hidden'>{year}</p>
        <div className="shadow-sm  mb-4 group-last:mb-0">
          {title && (
            <h3 className="text-lg font-semibold !m-0">{title}</h3>
          )}
          {children && (
            <div className="mt-2 text-sm text-muted-foreground">
              {children}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

// MDX component wrapper
export const TimelineMDX: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="my-8">
      {children}
    </div>
  );
};

