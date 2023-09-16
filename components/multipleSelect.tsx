import RootSelect, {
  components,
  IndicatorsContainerProps,
  MultiValueRemoveProps,
} from 'react-select';

interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
  placeholder?: string;
  onChange?: (values: any) => void;
  defaultValue?: any;
}

function IndicatorsContainer(props: IndicatorsContainerProps) {
  return (
    <components.IndicatorsContainer {...props}>
      <i className="ri-expand-up-down-line"></i>
    </components.IndicatorsContainer>
  );
}

function MultiValueRemove(props: MultiValueRemoveProps) {
  return (
    <components.MultiValueRemove {...props}>
      <i className="ri-close-line ri-sm"></i>
    </components.MultiValueRemove>
  );
}

export default function MultipleSelect({
  options,
  placeholder,
  onChange,
  defaultValue,
}: Props) {
  return (
    <RootSelect
      options={options}
      placeholder={placeholder}
      isMulti
      defaultValue={defaultValue}
      classNames={{
        control: () =>
          '!border-none !bg-gray-900 !shadow-none !py-3 !px-10 [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_70%,calc(100%-1rem)_100%,1rem_100%,0%_30%)]',
        placeholder: () => '!text-gray-400 !m-0',
        valueContainer: () => '!p-0 last:bg-red-500',
        menu: () =>
          '!bg-gray-900 !rounded !shadow-xl !z-20 !shadow-gray-500/5 !left-4 !w-auto !right-4',
        menuList: () => '!p-0',
        option: (state) =>
          `!py-3 !text-[0.9375rem] !px-6 !bg-transparent !cursor-pointer ${
            state.isFocused && '!text-emerald-500'
          }`,
        multiValue: () => '!rounded !bg-gray-800',
        multiValueLabel: () => '!text-gray-300 !text-sm !pl-2 !pr-1',
        multiValueRemove: () => '!bg-transparent !text-gray-400',
        input: () => '!text-white',indicatorsContainer:() =>'!cursor-pointer'
      }}
      noOptionsMessage={() => 'Không có kết quả'}
      components={{
        IndicatorsContainer,
        MultiValueRemove,
      }}
      onChange={(options) => {
        onChange && onChange(options.map((option) => (option as Option).value));
      }}
    />
  );
}
