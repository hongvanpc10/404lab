import { Popover as BasePopover, Transition } from '@headlessui/react';
import { ReactElement } from 'react';

interface Props {
  children?: ReactElement;
  render: () => ReactElement;
}

export default function Popover({ children, render }: Props) {
  return (
    <BasePopover as="div" className="relative z-10">
      <BasePopover.Button as="div" className="outline-none">
        {children}
      </BasePopover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform -translate-y-4 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-3 opacity-0"
      >
        <BasePopover.Panel className="absolute outline-none top-[calc(100%+.5rem)] flex shadow-xl shadow-gray-500/5 flex-col min-w-[12rem] right-0 bg-gray-900">
          {render}
        </BasePopover.Panel>
      </Transition>
    </BasePopover>
  );
}
