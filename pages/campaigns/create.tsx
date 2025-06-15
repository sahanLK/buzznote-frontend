import FormTextField from "@/components/form/FormTextField";
import React, { FormEvent, useState } from "react";


export default function CreateCampaign() {

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        previewText: '',
        fromName: '',
        fromEmail: ''
    });

    function onFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-stone-600 mb-10 mt-5">Campaign Info</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <FormTextField name="name" title="Campaign name" value={formData.name} onInputChange={onFormChange} />
                <FormTextField name="subject" title="Email Subject" value={formData.subject} onInputChange={onFormChange} />
                <FormTextField name="previewText" title="Preview text" value={formData.previewText} onInputChange={onFormChange} />
                <FormTextField name="fromName" title="From name" value={formData.fromName} onInputChange={onFormChange} />
                <FormTextField name="fromEmail" title="From email address" value={formData.fromEmail} onInputChange={onFormChange} />

                <input type="submit" className="px-5 py-2 mt-5 rounded bg-green-700 text-white" value="Create Campaign" />
            </form>
        </div>
    )
}