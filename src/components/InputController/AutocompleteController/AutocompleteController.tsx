import React from 'react';
import { Controller } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { Option, AutocompleteControllerProps } from '../../../fields/index';

export const AutocompleteController = ({
    control,
    name,
    errors,
    defaultValue,
    options,
    textFieldProps,
    multiple,
    ...rest
}: AutocompleteControllerProps) => (
    <Controller
        control={control}
        name={name}
        defaultValue={multiple ? defaultValue?.map((dv: Option) => dv.value) || [] : defaultValue || ''}
        render={({ field: { onChange: fieldOnChange, value: fieldValue, ...restField } }) => {
            return (
                <Autocomplete
                    options={options || []}
                    autoHighlight
                    getOptionLabel={(option: Option) => {
                        const found = options.find((o: any) => o.value == option) as Option;
                        const label = option?.label || (found && found?.label) || option || '';
                        return label.toString();
                    }}
                    disableCloseOnSelect={multiple}
                    isOptionEqualToValue={(option: any, value: any) => {
                        return option?.value == value.value;
                    }}
                    disableClearable={rest.disableClearable}
                    disabled={rest.disabled}
                    {...(rest.noOptionsText && {
                        noOptionsText: rest.noOptionsText
                    })}
                    multiple={multiple}
                    size={rest.size}
                    className="MuiFormControl-marginDense"
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                label={textFieldProps?.label}
                                variant={textFieldProps?.variant}
                                fullWidth={textFieldProps?.fullWidth}
                                error={Object.prototype.hasOwnProperty.call(errors, name) ? true : false}
                                helperText={errors[name]?.message}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'disabled'
                                }}
                            />
                        );
                    }}
                    onChange={(_, newValue: any) => {
                        // onChange && onChange(newValue);
                        fieldOnChange(
                            multiple
                                ? newValue?.map((v: any) => v?.value || v)
                                : newValue && Object.prototype.hasOwnProperty.call(newValue, 'value')
                                ? newValue?.value
                                : ''
                        );
                    }}
                    {...restField}
                />
            );
        }}
    />
);

export default AutocompleteController;
