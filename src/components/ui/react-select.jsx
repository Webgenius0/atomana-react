import ReactSelect from 'react-select';

export default function Select({ width, height, borderRadius, ...props }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      whiteSpace: 'nowrap',
      fontWeight: 500,
      transition: 'color 0.2s',
      outline: state.isFocused ? 'none' : '#024040',
      border: `1px solid #d8dfeb`,
      boxShadow: state.isFocused
        ? '0 1px 2px rgba(2,64,64,0.05)'
        : '0 1px 2px rgba(0,0,0,0.05)',
      pointerEvents: state.isDisabled ? 'none' : undefined,
      opacity: state.isDisabled ? 0.5 : 1,
      paddingInline: '6px',
      height: height || '48px',
      borderRadius: borderRadius || '10px',
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: '0.875rem',
      lineHeight: '21px',
      letterSpacing: '-0.14px',
      width: width || '100%',
      '&:hover': {
        borderColor: '#fff',
      },
    }),

    placeholder: (provided) => ({
      ...provided,
      color: '#808080',
    }),

    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),

    input: (provided) => ({
      ...provided,
      color: '#fff',
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: '#151515',
      border: '1px solid #333',
      borderRadius: '10px',
      marginTop: '8px',
      zIndex: 9999,
      overflow: 'hidden',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#024040'
        : state.isFocused
        ? '#333'
        : '#151515',
      color: '#f8fafc',
      padding: '0.625rem 1rem',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#024040',
      },
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#94a3b8',
      '&:hover': {
        color: '#f8fafc',
      },
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <ReactSelect
      className="basic-single"
      classNamePrefix="select"
      isClearable
      isSearchable
      styles={customStyles}
      {...props}
    />
  );
}
