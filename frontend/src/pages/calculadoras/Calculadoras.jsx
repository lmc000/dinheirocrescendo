import { useEffect } from "react";

export default function Calculadoras() {
    useEffect(() => { window.location.replace("/calculadoras/"); }, []);
    return null;
}
