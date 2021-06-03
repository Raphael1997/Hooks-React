import { useState } from "react";
import { useEffect } from "react"

export const SimpleForm = () => {

    //useEffect nos permite ejecutar un efecto secundario cuando algo ocurre en el componente

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        // trabajar los efectos de forma individual
        console.log("Works use effect");
    }, []);
    useEffect(() => {
        // trabajar los efectos de forma individual
        console.log("El email ha cambiado");
    }, [email]);
    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange} />
            </div>
        </>
    )
}
