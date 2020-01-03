import { useState } from 'react';
const useForm = (callback) => {

    const [values, setValues] = useState('');
    const [loading, setLoading] = useState(false);

    const HandleChange = (event) => {
        const NewValues = { ...values };
        NewValues[event.target.name] = event.target.value;
        setValues(NewValues);

    }
    const HandleSubmit = callback => event => {
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
       
    }

    return [{ values,loading }, HandleChange, HandleSubmit];
}
export default useForm;