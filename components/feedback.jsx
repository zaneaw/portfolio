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
import * as yup from "yup";
import styles from "./feedback.module.css";

export default function Feedback({ open, handleClose }) {
    const validationSchema = yup.object({
        rating: yup.number(),
        comments: yup.string(),
        email: yup
            .string()
            .email("Enter valid email.")
            .required("Email required!"),
        createdOn: yup.date().default(() => new Date()),
    });

    const formik = useFormik({
        initialValues: {
            rating: 5,
            comments: "",
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.modalTitle}>
                    Send Feedback
                </DialogTitle>
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
                            name="comments"
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
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
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
