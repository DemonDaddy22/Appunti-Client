/* eslint-disable prettier/prettier */
import axios from 'axios';
import { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { RED_500, RED_700 } from '../../resources/colors';
import { BOOKS_API_URI, TOAST_VARIANTS } from '../../resources/constants';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Label from '../../ui-components/Label';
import Toast from '../../ui-components/Toast';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

// TODO - check if name already exists and not equal to default option
// TODO - on submit, if successful set new bookshelf as option in dropdown
// TODO - add cancel function logic, on cancel clear dropdown
// TODO - create a file picker component
const NewBookshelfForm = () => {
    const { getThemedValue } = useContext(ThemeContext);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [toastData, setToastData] = useState<IToastData>({});

    const handleTitleChange = (value: any) => setTitle(value);

    const handleDescriptionChange = (value: any) =>
        setDescription(value);

    const handleImageUrlChange = (value: any) => setImageUrl(value);

    const handleToastClose = () => setToastData({});

    const handleCancelClick = useCallback(() => {}, []);

    const handleSubmitClick = useCallback(async () => {
        try {
            const response = await axios.post(`${BOOKS_API_URI}/bookshelf/add`, {
                title,
                description,
                imageUrl,
            });
            if (!isEmptyObject(response?.data?.error)) {
                throw new Error(response.data.error?.message);
            }
            setToastData({
                label: 'Successfully created new bookshelf',
                variant: TOAST_VARIANTS.SUCCESS,
            });
        } catch (error) {
            setToastData({
                label: error.message,
                variant: TOAST_VARIANTS.ERROR,
            });
        }
    }, [title, description, imageUrl]);

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
                        disabled={isEmptyString(title)}
                        onClick={handleSubmitClick}
                        style={{ width: 'fit-content' }}
                    >
                        Create
                    </Button>
                    <ButtonOutlined
                        onClick={() => {}}
                        color={getThemedValue(RED_700, RED_500)}
                        style={{ width: 'fit-content' }}
                    >
                        Cancel
                    </ButtonOutlined>
                </div>
            </div>
            {!isEmptyObject(toastData) && (
                <Toast onClose={handleToastClose} {...toastData} />
            )}
        </>
    );
};

export default NewBookshelfForm;
