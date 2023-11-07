import { useField } from "formik";
import "./validation.css";
import {MDBTextArea} from "mdb-react-ui-kit";

const CustomTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            < MDBTextArea wrapperClass='mb-4' label={label} size="lg"
                          {...field}
                          {...props}
                          className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default CustomTextArea;