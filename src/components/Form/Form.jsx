import PropTypes from "prop-types";
import { Form, SerchFormInput, SerchFormBtn } from "./Form.styled";

export function SearchForm({ handleSubmit }) {
    return(
    <Form onSubmit={handleSubmit} autoComplete="off">
            <SerchFormInput type="text" name="query" />
            <SerchFormBtn type="submit">Search</SerchFormBtn>
        </Form>
    )    
}

SearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}
