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
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./feedback.module.css";

export default function Feedback({ open, handleClose }) {
    const validationSchema = Yup.object({
        rating: Yup.number(),
        comments: Yup.string(),
        email: Yup
            .string()
            .email("Enter valid email.")
            .required("Email required!")
    });

    const formik = useFormik({
        initialValues: {
            rating: 5.0,
            comments: "",
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            values.createdOn = new Date().toISOString().split("T")[0];
            fetch("/api/createFeedback", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ values })
            })
                .then((res) => res.json())
                .catch((error) => { console.error("Error", error)});
            resetForm();
        },
    });

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.modalTitle}>
                    Send Feedback
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <DialogContentText>Rating:</DialogContentText>
                        <Rating
                            id="rating"
                            name="rating"
                            value={Number(values.rating)}
                            onChange={handleChange}
                            precision={1}
                        />
                        <br />
                        <TextField
                            label="Comments"
                            id="comments"
                            name="comments"
                            rows={4}
                            multiline
                            value={values.comments}
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            placeholder="foobar@gmail.com"
                            value={values.email}
                            onChange={handleChange}
                            error={
                                touched.email &&
                                Boolean(errors.email)
                            }
                            helperText={
                                touched.email && errors.email
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}