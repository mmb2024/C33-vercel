//@ts-nocheck
import { object, string } from "yup";
import 'dotenv/config';
import { sql } from '@vercel/postgres';

export const prerender = false;


async function storeDataVercel(pgData)  {
  console.log("./contact/page.server.js L10: pgData= ", pgData);
  try {
    const result2 = await sql`INSERT INTO users1 (name, lastname, email, message) 
        VALUES (${pgData.name}, ${pgData.lastname}, ${pgData.email}, ${pgData.message});` 
    console.log("./contact/page.server.js L13: result2= ", result2);
    return { 
      success: true,
      status: "Informacion enviada con exito",
    }
    } catch (error) {
          const errors = error;
          return { errors }
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ( {  request } ) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");

    const contactFormSchema = object({
      name: string().min(2, "too short").required("Por favor ingresar un nombre valido"),
      lastname: string().min(2, "too short").required("Por favor ingresar un apellido valido"),
      email: string().required("Email es requerido.").email(),
      message: string().required(),
    });

    try {
      const result = await contactFormSchema.validate(
            { name, lastname, email, message },
            { abortEarly: false }
        );

      const pgData = {
        name: `${name}`,
        lastname: `${lastname}`,
        email:  `${email}`,
        message: `${message}`
      };

      const  status1 = await storeDataVercel(pgData);
      return { 
          success: true,
          status: `Gracias ${name} ${lastname}. Tu Informacion fue enviada con exito`,
      }
    } catch(error) {
        console.log({ error });
        const errors = error.inner.reduce((acc, err) => {
          return { ...acc, [err.path]: err.message };
        }, {});
        return {
          errors,
          name,
          lastname,
          email,
          message,
        };
    }
}};