
import { sql } from '@vercel/postgres';
import { object, string } from "yup";
import 'dotenv/config';

export const prerender = false;

async function storeDataVercel(pgUsers1)  {
  const startTime = Date.now();
  try {
    const sqlQuery = await sql`INSERT INTO users1 (name, lastname, email, message) 
                              VALUES (
                                ${pgUsers1.name},
                                ${pgUsers1.lastname},
                                ${pgUsers1.email},
                                ${pgUsers1.message});`;
    const duration = Date.now() - startTime;
    console.log(`+page.server sql() L18: duration= `, duration);
    return ("true");
  } catch (error) {
          const errors = error;
          return { errors }
  }
};

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ( {  request } ) => {
    const formData = await request.formData();
    const name      = formData.get("name");
    const lastname  = formData.get("lastname");
    const email     = formData.get("email");
    const message   = formData.get("message");

    const contactFormSchema = object({
      name:     string().min(2, "too short").required("Por favor ingresar un nombre valido"),
      lastname: string().min(2, "too short").required("Por favor ingresar un apellido valido"),
      email:    string().required("Email es requerido.").email(),
      message:  string().required(),
    });

    try {
      const validationResult = await contactFormSchema.validate(
            { name, lastname, email, message },
            { abortEarly: false }
        );

      const pgUsers1 = {
        name:     `${name}`,
        lastname: `${lastname}`,
        email:    `${email}`,
        message:  `${message}`
      };

      const  status1 = await storeDataVercel(pgUsers1);
      if (status1) {
          return { 
            success: true,
            status: `Gracias ${name}. Tu Informacion fue enviada con exito`,
          }
      } else {
          return { 
            success: false,
            status: `${name}. Error en el envio de tu Informacion, por favor intenta mas tarde.`,
            name,
            lastname,
            email,
            message,
          }
      }

    } catch(error) {
        if (error instanceof Error) {
            // ✅ TypeScript knows err is Error
            console.log( error )
//            const errors = error.inner.reduce((acc, err) => {
//              return { ...acc, [err.path]: err.message };
//            }, {});
            let errors = error;
            return {
              error,
              errors,
              name,
              lastname,
              email,
              message,
            };
        } else {
          console.log( error )
        }
      }
}};