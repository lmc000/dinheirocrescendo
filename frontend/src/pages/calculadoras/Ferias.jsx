import { useEffect } from "react";

export default function Ferias() {
    useEffect(() => { window.location.replace("/calculadoras/ferias/"); }, []);
    return null;
}
