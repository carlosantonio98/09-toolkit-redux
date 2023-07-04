import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({  // El createApi nos crea custom hooks, ese custom hook es el que nos va a tener la información necesaria para saber cuando tenemos errores, cuando esta cargando, etc. etc..

    reducerPath: 'todos',  // Nombre que el reducer va a tener

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({  // diferentes funciones que nosotros vamos a querer llamar para obtener la información

        getTodos: builder.query({
            query: () => '/todos'
        })
    })

});

export const { useGetTodosQuery } = todosApi();