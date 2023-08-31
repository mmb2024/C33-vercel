import { object, string } from "yup";
import "dotenv/config";
import { sql } from "@vercel/postgres";
const prerender = false;
async function storeDataVercel(pgData) {
  try {
    const result2 = await sql`INSERT INTO users1 (name, lastname, email, message) 
                              VALUES (
                                ${pgData.name},
                                ${pgData.lastname},
                                ${pgData.email},
                                ${pgData.message});`;
    return "true";
  } catch (error) {
    const errors = error;
    return { errors };
  }
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");
    const contactFormSchema = object({
      name: string().min(2, "too short").required("Por favor ingresar un nombre valido"),
      lastname: string().min(2, "too short").required("Por favor ingresar un apellido valido"),
      email: string().required("Email es requerido.").email(),
      message: string().required()
    });
    try {
      const result = await contactFormSchema.validate(
        { name, lastname, email, message },
        { abortEarly: false }
      );
      const pgData = {
        name: `${name}`,
        lastname: `${lastname}`,
        email: `${email}`,
        message: `${message}`
      };
      const status1 = await storeDataVercel(pgData);
      if (status1) {
        return {
          success: true,
          status: `Gracias ${name}. Tu Informacion fue enviada con exito`
        };
      } else {
        return {
          success: false,
          status: `${name}. Error en el envio de tu Informacion, por favor intenta mas tarde.`,
          name,
          lastname,
          email,
          message
        };
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        let errors = error;
        return {
          error,
          errors,
          name,
          lastname,
          email,
          message
        };
      } else {
        console.log(error);
      }
    }
  }
};
export {
  actions,
  prerender
};
