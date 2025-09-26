import FormSubmitButton from "@/components/form/FormSubmitButton";
import FormInputField from "@/components/form/FormTextField";
import Link from "next/link";
import { FormEvent, ReactElement, useState } from "react";
import SignedOutLayout from "../../components/layouts/SignedOutLayout";
import type { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";


const LoginPage: NextPageWithLayout = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prev => (
            { ...prev, [e.target.name]: e.target.value }
        ));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch('http://localhost:8081/api/auth/login', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(res => {
            if (res.status == 200) {
                router.replace("/");
            } else {
                setError("Invalid Credentials");
            }
        });
    }

    return (
        <div className="container mx-auto">
            <div className="max-w-md mx-auto rounded bg-white shadow px-10 py-5">
                <h2 className="text-2xl text-stone-700 my-3 font-bold text-center">Log in to Buzznote</h2>
                <p className={`text-center ${error ? 'mb-0' : 'mb-15'}`}>
                    Need a Buzznote Account? <Link href="/auth/register" className="underline pl-2">Create an Account</Link>
                </p>

                {error && (
                    <p className="text-sm text-red-500 pt-10">{error}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <FormInputField name="email" value={formData.email} title="Username or Email" onInputChange={handleChange} />
                    <FormInputField name="password" value={formData.password} title="Password" onInputChange={handleChange} />
                    {/* <FormCheckboxField name="status" title="Keep me Logged In" checked={formData.keepLoggedIn} onInputChange={toggleCheckbox} /> */}
                    <FormSubmitButton text="Login" />
                </form>
            </div>
        </div>
    )
}

LoginPage.getLayout = (page: ReactElement) => <SignedOutLayout>{page}</SignedOutLayout>

export default LoginPage;