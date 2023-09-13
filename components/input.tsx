import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

export default forwardRef(function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className="outline-none w-full bg-gray-900 py-4 px-10 [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_70%,calc(100%-1rem)_100%,1rem_100%,0%_30%)]"
      {...props}
    />
  );
});
