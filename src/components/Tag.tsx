import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type TagSize = 'sm' | 'md' | 'lg';
type Color = 'green' | 'white' | 'black';

interface TagProps {
  size?: TagSize;
  color?: Color;
}

const Tag = ({
  size = 'sm',
  color = 'black',
  children
}: PropsWithChildren<TagProps>) => {
  let p = {
    x: 'px-2',
    y: 'py-[5px]',
  };
  let text = 'text-xs';
  let textColor = 'text-white';
  let borderColor = 'border-gray-600';
  let bgColor = 'black'

  switch (size) {
    case 'md':
      p = {
        x: 'px-2',
        y: 'py-1',
      };
      text = 'text-sm';
      break;
    case 'lg':
      p = {
        x: 'px-4',
        y: 'py-2',
      };
      text = 'text-md';
      break;
  }

  switch (color) {
    case 'green':
      textColor = 'text-white';
      borderColor = 'border-green-800';
      bgColor = 'bg-green-800';
      break;
    case 'white':
      textColor = 'text-black';
      borderColor = 'border-white';
      bgColor = 'bg-white';
      break;
    case 'black':
      textColor = 'text-white';
      borderColor = 'border-gray-500';
      bgColor = 'bg-black';
      break;

  }

  return (
    <span
      className={
        cn(
          'border', text, textColor, borderColor, bgColor, p.x, p.y,
        )}
    >
      {children}
    </span>
  );
};

export default Tag;
