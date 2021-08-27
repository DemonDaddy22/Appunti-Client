import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { RED_500, RED_700 } from '../../resources/colors';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Label from '../../ui-components/Label';
import classes from './styles.module.scss';

// TODO - check if name already exists and not equal to default option
// TODO - on submit, if successful set new bookshelf as option in dropdown
// TODO - add cancel button to hide the form
// TODO - create a file picker component
const NewBookshelfForm = () => {
    const { getThemedValue } = useContext(ThemeContext);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const handleTitleChange = (e: any) => setTitle(e?.target?.value);

    const handleDescriptionChange = (e: any) =>
        setDescription(e?.target?.value);

    const handleImageUrlChange = (e: any) => setImageUrl(e?.target?.value);

    return (
        <div className={classes.formContainer}>
            <div className={classes.formRow}>
                <div className={classes.formCol}>
                    <Label label="Bookshelf Title" />
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
                <Button onClick={() => {}} style={{ width: 'fit-content' }}>
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
    );
};

export default NewBookshelfForm;
