/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ToastContext } from '../../context/ToastContext';
import { RED_500, RED_700 } from '../../resources/colors';
import { BOOKS_API_URI, TOAST_VARIANTS } from '../../resources/constants';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Label from '../../ui-components/Label';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

// TODO - check if name already exists and not equal to default option
// TODO - on submit, if successful set new bookshelf as option in dropdown
// TODO - add cancel function logic, on cancel clear dropdown
// TODO - create a file picker component
const NewBookshelfForm: React.FC<INewBookshelfForm> = (props) => {
    const { foundBook, handleCancel, handleSubmit, handleAddBook } = props;

    const { addToast } = useContext(ToastContext);
    const { getThemedValue } = useContext(ThemeContext);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [makeAPICall, setMakeAPICall] = useState<boolean>(false);

    const handleTitleChange = (value: any) => setTitle(value);

    const handleDescriptionChange = (value: any) =>
        setDescription(value);

    const handleImageUrlChange = (value: any) => setImageUrl(value);

    const handleCancelClick = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
        handleCancel();
        e.stopPropagation();
    }, [handleCancel]);

    const handleSubmitClick = useCallback(async (e: React.MouseEvent | React.KeyboardEvent) => {
        if (isEmptyObject(foundBook)) await handleAddBook();
        setMakeAPICall(true);
        e.stopPropagation();
    }, [foundBook, handleAddBook]);

    useEffect(() => {
        if (makeAPICall && !isEmptyObject(foundBook)) {
            const createNewBookshelf = async () => {
                setLoading(true);
                try {
                    const bookshelfResponse = await axios.post(`${BOOKS_API_URI}/bookshelf/add`, {
                        title,
                        description,
                        imageUrl,
                        bookIds: [foundBook?._id],
                    });
                    if (!isEmptyObject(bookshelfResponse?.data?.error)) {
                        throw new Error(bookshelfResponse.data.error?.message);
                    }
                    addToast({
                        label: 'Successfully created new bookshelf',
                        variant: TOAST_VARIANTS.SUCCESS,
                    });
                    handleSubmit(bookshelfResponse?.data?.data?.bookshelf);
                } catch (error) {
                    addToast({
                        label: error.message,
                        variant: TOAST_VARIANTS.ERROR,
                    });
                }
                setLoading(false);
                setMakeAPICall(false);
            };
            createNewBookshelf();
        }
    }, [title, description, imageUrl, foundBook, makeAPICall]);

    return (
        <>
            <div className={classes.formContainer}>
                <div className={classes.formRow}>
                    <div className={classes.formCol}>
                        <Label label="Bookshelf Title" required />
                        <Input
                            name="title"
                            placeholder="Enter title..."
                            value={title}
                            onChange={handleTitleChange}
                            containerStyle={{ minWidth: '10rem' }}
                        />
                    </div>
                    <div className={classes.formCol}>
                        <Label label="Bookshelf Description" />
                        <Input
                            name="description"
                            placeholder="Enter description..."
                            value={description}
                            onChange={handleDescriptionChange}
                            containerStyle={{ minWidth: '10rem' }}
                        />
                    </div>
                </div>
                <div className={classes.formRow}>
                    <div className={classes.formCol}>
                        <Label label="Bookshelf Cover Image" />
                        <Input
                            name="cover"
                            placeholder="Enter image URL..."
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            containerStyle={{ minWidth: '10rem' }}
                        />
                    </div>
                </div>
                <div className={classes.buttonsWrapper}>
                    <Button
                        disabled={loading || isEmptyString(title)}
                        onClick={handleSubmitClick}
                        style={{ width: 'fit-content' }}
                    >
                        Create
                    </Button>
                    <ButtonOutlined
                        disabled={loading}
                        onClick={handleCancelClick}
                        color={getThemedValue(RED_700, RED_500)}
                        style={{ width: 'fit-content' }}
                    >
                        Cancel
                    </ButtonOutlined>
                </div>
            </div>
        </>
    );
};

export default NewBookshelfForm;
