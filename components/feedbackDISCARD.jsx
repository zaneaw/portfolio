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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./feedback.module.css";

const FeedbackSchema = Yup.object({
    rating: Yup.number(),
    comments: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email required"),
    createdOn: Yup.date().default(() => new Date()),
});

export default function Feedback({ open, handleClose }) {
    <Formik
        initialValues={{
            rating: 5.0,
            comments: "",
            email: ""
        }}
        validationSchema={FeedbackSchema}
        onSubmit={(values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        }}
    >
        {({ submitForm, errors, resetForm }) => (
            <Form>
                <Field
                    component={Rating}
                    name="rating"
                    
            </Form>
        )}


    </Formik>
}