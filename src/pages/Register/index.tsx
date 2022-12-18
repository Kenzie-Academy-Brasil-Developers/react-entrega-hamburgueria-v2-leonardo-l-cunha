import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { authContext } from "../../providers/authContext"
import { Container } from "../../styles/Container"
import { FormStyledRegi, MainStyledRegi, SpanErro } from "./style"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


interface iRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export const Register = () => {

    const schema = yup.object().shape({
        name:yup.string().required("O nome e obrigatorio").min(4,"o minino de caracteres e 4"),
        email: yup.string().required("O email e obrigatorio").email("email invalido"),
        password: yup.string().required("A senha e obrigatoria")
        .matches(/(?=.*?[A-Z])/,"Pelo menos uma letra maiúscula")
        .matches(/(?=.*?[a-z])/,"Pelo menos uma letra minúscula")
        .matches(/(?=.*?[0-9])/,"pelo menos um numero")
        .matches(/(?=.*?[#?!@$%^&*-])/,"Pelo menos um caractere especial")
        .min(8,"pelo menos oito caracteres"),
        confirmPassword: yup.string().required("Confirmação da senha e obrigatoria").oneOf([yup.ref("password")], "As senhas devem ser a mesma "),
    })

    const { createUser } =useContext(authContext)
    const { register , handleSubmit , formState: { errors }} = useForm<iRegister>({
        resolver : yupResolver(schema)
    })

    const onSubmit: SubmitHandler<iRegister> = (data) => {
        createUser(data)
    }
    return (
        <Container>
            <MainStyledRegi>
                <section>
                <h1>Burguer <span>Kenzie</span></h1>
                <div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#219653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 6H21" stroke="#219653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#219653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                </div>
                <span>
                    <svg width="182" height="79" viewBox="0 0 182 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5.44828" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="39.5" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="73.5517" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="141.655" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="175.707" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="107.603" cy="5.44828" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="5.44828" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="39.5" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="73.5517" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="141.655" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="175.707" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="107.603" cy="39.5" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="5.44828" cy="73.5518" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="39.5" cy="73.5518" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="73.5517" cy="73.5518" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="141.655" cy="73.5518" r="5.44828" fill="#F2F2F2"/>  
                        <circle cx="175.707" cy="73.5518" r="5.44828" fill="#F2F2F2"/>
                        <circle cx="107.603" cy="73.5518" r="5.44828" fill="#F2F2F2"/>
                    </svg>
                </span>
                </section>
                <section>
                    <FormStyledRegi onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p>Cadastro</p>
                            <Link to="/">
                                Retonar para o Login
                            </Link>
                        </div>
                        <Input label="Nome" id="name" type="text" placeholder="Digite seu nome" {...register("name")}/> 
                        {errors.name?.message && <SpanErro>{errors.name.message}</SpanErro>}
                        <Input label="Email" id="email" type="email" placeholder="Digite seu Email"  {...register("email")}/> 
                        {errors.email?.message && <SpanErro>{errors.email.message}</SpanErro>}
                        <Input  id="senha" type="password" placeholder="Senha" {...register("password")}/> 
                        {errors.password?.message && <SpanErro>{errors.password.message}</SpanErro>}
                        <Input id="confirmar Senha" type="password" placeholder="Confirmar Senha" {...register("confirmPassword")}/> 
                        {errors.confirmPassword?.message && <SpanErro>{errors.confirmPassword.message}</SpanErro>}
                        <button type="submit">Cadastrar</button>
                    </FormStyledRegi>
                </section>  
            </MainStyledRegi>
        </Container>
    )
}

function yupResolvers(): import("react-hook-form").Resolver<iRegister, any> | undefined {
    throw new Error("Function not implemented.")
}
