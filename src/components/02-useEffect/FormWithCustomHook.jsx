import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {

    //useEffect nos permite ejecutar un efecto secundario cuando algo ocurre en el componente

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>FormWithCustomHook</h1>
                <hr />
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Tu password" value={password} onChange={handleInputChange} />
                </div>

                <button className="btn btn-primary">Guardar</button>
            </form>
        </>
    )
}
