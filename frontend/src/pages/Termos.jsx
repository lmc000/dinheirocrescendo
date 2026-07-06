import { useEffect } from "react";

export default function Termos() {
    useEffect(() => { window.location.replace("/termos/"); }, []);
    return null;
}
