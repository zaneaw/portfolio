import {
    Dialog,
    Button,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Rating,
    TextField,
    DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "./feedback.module.css";

export default function Feedback() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            rating: 5,
            comments: "",
            email: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                className={styles.feedbackButton}
            >
                Send Feedback
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.modalTitle}>Send Feedback</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <DialogContentText>Rating:</DialogContentText>
                        <Rating
                            id="rating"
                            name="rating"
                            value={Number(formik.values.rating)}
                            onChange={formik.handleChange}
                            precision={0.5}
                        />
                        <br />
                        <TextField
                            label="Comments"
                            id="comments"
                            rows={4}
                            multiline
                            value={formik.values.comments}
                            onChange={formik.handleChange}
                        />
                        <br />
                        <br />
                        <TextField
                            label="Email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
