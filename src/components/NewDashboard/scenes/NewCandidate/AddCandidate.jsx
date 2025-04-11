import { Box, Button, TextField, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../newComponents/Header";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { ColorModeContext, useMode } from "../../theme";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../helper";
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
    const [theme, colorMode] = useMode();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const CreationSuccess = () =>
        toast.success("Candidate Created Successfully \n Click Anywhere to exit this screen", {
            className: "toast-message",
        });

    const CreationFailed = () =>
        toast.error("Invalid Details \n Please Try Again!", {
            className: "toast-message",
        });

    const initialValues = {
        fullName: "",
        age: "",
        party: "",
        bio: "",
        image: null,
        symbol: null,
    };

    const checkoutSchema = yup.object().shape({
        fullName: yup.string().required("Required"),
        age: yup.number().required("Required").positive().integer(),
        party: yup.string().required("Required"),
        bio: yup.string().required("Required"),
        image: yup.mixed().required("Image is required"),
        symbol: yup.mixed().required("Symbol is required"),
    });

    const handleSubmit = async (values) => {
        setLoading(true);
        const formDataToSend = new FormData();

        for (const key in values) {
            formDataToSend.append(key, values[key]);
        }

        try {
            const response = await axios.post(`${BASE_URL}/createCandidate`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                CreationSuccess();
                setTimeout(() => {
                    navigate('/Candidate');
                }, 200);
            } else {
                CreationFailed();
            }
        } catch (error) {
            CreationFailed();
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="appNew">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <ToastContainer />
                        <Box m="0px 20px">
                            <Header title="CREATE NEW CANDIDATE" subtitle="Create a New Candidate Profile" />
                            <br />
                            <Formik
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                                onSubmit={handleSubmit}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    setFieldValue
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Box
                                            display="grid"
                                            gap="20px"
                                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                            sx={{
                                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                            }}
                                        >
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Candidate Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.fullName}
                                                name="fullName"
                                                error={!!touched.fullName && !!errors.fullName}
                                                helperText={touched.fullName && errors.fullName}
                                                sx={{ gridColumn: "span 4" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                                label="Age"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.age}
                                                name="age"
                                                error={!!touched.age && !!errors.age}
                                                helperText={touched.age && errors.age}
                                                sx={{ gridColumn: "span 4" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Party"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.party}
                                                name="party"
                                                error={!!touched.party && !!errors.party}
                                                helperText={touched.party && errors.party}
                                                sx={{ gridColumn: "span 4" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                multiline
                                                rows={4}
                                                label="Bio"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.bio}
                                                name="bio"
                                                error={!!touched.bio && !!errors.bio}
                                                helperText={touched.bio && errors.bio}
                                                sx={{ gridColumn: "span 4" }}
                                            />

                                            {/* File Upload - Image */}
                                            <input
                                                accept="image/*"
                                                id="image"
                                                name="image"
                                                type="file"
                                                onChange={(event) => {
                                                    setFieldValue("image", event.currentTarget.files[0]);
                                                }}
                                                style={{ gridColumn: "span 4" }}
                                            />
                                            {touched.image && errors.image && (
                                                <div style={{ color: "red", gridColumn: "span 4" }}>{errors.image}</div>
                                            )}

                                            {/* File Upload - Symbol */}
                                            <input
                                                accept="image/*"
                                                id="symbol"
                                                name="symbol"
                                                type="file"
                                                onChange={(event) => {
                                                    setFieldValue("symbol", event.currentTarget.files[0]);
                                                }}
                                                style={{ gridColumn: "span 4" }}
                                            />
                                            {touched.symbol && errors.symbol && (
                                                <div style={{ color: "red", gridColumn: "span 4" }}>{errors.symbol}</div>
                                            )}
                                        </Box>

                                        <Box display="flex" justifyContent="end" mt="20px">
                                            <Button
                                                type="submit"
                                                color="secondary"
                                                variant="contained"
                                                disabled={loading}
                                            >
                                                {loading ? "Creating..." : "Create New Candidate"}
                                            </Button>
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                        </Box>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default AddCandidate;