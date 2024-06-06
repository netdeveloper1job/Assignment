import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ApiResponse, FormField } from './types';
import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Checkbox, FormGroup, styled, Container, Card } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const fetchFormConfig = async (): Promise<FormField[]> => {
    try {
        const response = await axios.get<ApiResponse>('http://localhost:7000/api/form-config');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching form config:', error);
        throw new Error('Failed to fetch form configuration');
    }
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FormRenderer: React.FC = () => {
    const { data, isLoading, error } = useQuery<FormField[]>('formConfig', fetchFormConfig);

    if (isLoading) return <div>Loading...</div>;

    if (error) {
        const errorMessage = (error as Error).message;
        return <div>Error: {errorMessage}</div>;
    }

    if (!Array.isArray(data)) {
        return <div>Error: Unexpected data format</div>;
    }

    return (
        <form>
            <Container>
                <Card sx={{ padding: 2, marginTop: 15 }}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <h1>Dynamic Form</h1>
                    </Grid>
                    <Grid container spacing={2}>
                        {data.map((field, index) => {

                            switch (field.comp) {
                                case 'TextInput':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <TextField
                                                error={field.isRequired && !field?.props?.value}
                                                id={field?.props?.id}
                                                helperText={field.isRequired && !field?.props?.value ? 'Incorrect entry.' : ''}
                                                size="small"
                                                required={field.isRequired}
                                                {...field.props}
                                                label=""
                                            />
                                        </Grid>
                                    );

                                case 'ImageInput':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <Button
                                                component="label"
                                                variant="contained"
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Upload file
                                                <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </Grid>
                                    );

                                case 'DropdownSingle':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <FormControl fullWidth>
                                                <Select
                                                    labelId={`${field.props?.id}-label`}
                                                    id={field.props?.id}
                                                    size='small'
                                                    required={field.isRequired}
                                                >
                                                    {field.props?.options.map((option: any) => (
                                                        <MenuItem key={option.reactKey} value={option.value}>
                                                            {option.display}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    );

                                case 'CheckboxList':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <FormGroup>
                                                {field.props?.options.map((option: any) => (
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label={option.display}
                                                        key={option.reactKey}
                                                    />
                                                ))}
                                            </FormGroup>
                                        </Grid>
                                    );

                                case 'RadioList':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <FormControl component="fieldset">
                                                <RadioGroup>
                                                    {field.props?.options.map((option: any) => (
                                                        <FormControlLabel
                                                            control={<Radio />}
                                                            label={option.display}
                                                            value={option.value}
                                                            key={option.reactKey}
                                                        />
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    );

                                case 'VideoInput':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <Button
                                                component="label"
                                                variant="contained"
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Upload Video
                                                <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </Grid>
                                    );

                                case 'DatePicker':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <TextField
                                                id={field.props?.id}
                                                type="date"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size="small"
                                                required={field.isRequired}
                                                {...field.props}
                                                label=""
                                            />
                                        </Grid>
                                    );

                                case 'PDFInput':
                                    return (
                                        <Grid item xs={3} key={index}>
                                            <InputLabel shrink htmlFor="bootstrap-input">
                                                {field?.props?.label}
                                            </InputLabel>
                                            <Button
                                                component="label"
                                                variant="contained"
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Upload PDF
                                                <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </Grid>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </Grid>
                </Card>
            </Container>
        </form>
    );
};

export default FormRenderer;
