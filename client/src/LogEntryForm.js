import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createLogEntry } from './API';

const LogEntryForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;

            await createLogEntry(data);
            onClose();
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            { error ? <h3 className="error">{ error }</h3> : null}
            <label htmlFor="api_key">API KEY</label>
            <input type="password" ref={register} name="apiKey" required />
            <label htmlFor="title">Title</label>
            <input ref={register} name="title" required/>
            <label htmlFor="comments">Comments</label>
            <textarea ref={register} name="comments"  rows={3} />
            <label htmlFor="description">Description</label>
            <textarea ref={register} name="description" rows={3} />
            <label htmlFor="image">Image</label>
            <input ref={register} name="image" />
            <label htmlFor="visitDate">Visit Date</label>
            <input ref={register} name="visitDate" type="date" />
            <button disabled={loading}>{ loading ? 'Loading...' : 'Create' }</button>
        </form>
    )
};

export default LogEntryForm;