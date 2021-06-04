import React from 'react'
import "../03-examples/style.css"
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHook = () => {

    const { data, loading } = useFetch("https://www.breakingbadapi.com/api/characters");

    return (
        <>
            <h1 className="title">【Ｂｒｅａｋｉｎｇ　Ｂａｄ】</h1>
            <hr />

            <div className="contenedor">
                {loading ? (
                    <div className="alert alert-info text-center">Loading...</div>
                )
                    :
                    (
                        data.map((resp) => {
                            return (
                                <div className="card" key={resp.char_id}>
                                    <div className="imgBx">
                                        <h2 className="imgBx-title">{resp.name}</h2>
                                        <img src={resp.img} alt="img" />
                                    </div>
                                    <div className="details">
                                        <h4>Birthday:  {resp.birthday}</h4>
                                        <h4>Nickname:  {resp.nickname}</h4>
                                        <h4>Occupation:  {resp.occupation}</h4>

                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </>
    )
}
