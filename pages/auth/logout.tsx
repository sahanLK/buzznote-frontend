import { useEffect, useState } from "react"

export default function Logout() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:8081/api/auth/logout", {
            method: "GET",
            credentials: "include",
        }).then(res => {
            if (res.status == 200) {
                console.log("Logout Successful");
            } else {
                console.error("Logout Failed");
            }
        });
    }, []);

    return (
        <div>
            {!loading && <p>Logout Success</p>}
        </div>
    )
}