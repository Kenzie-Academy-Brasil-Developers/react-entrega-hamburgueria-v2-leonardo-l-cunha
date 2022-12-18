import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { authContext } from "../../providers/authContext"
import { Container } from "../../styles/Container"
import { FormStyled, MainStyled } from "./style"


interface iData {
    email: string,
    password: string
}
export const Login = () => {
    const { register , handleSubmit , formState: { errors }} = useForm<iData>({})
    const { login } = useContext(authContext)

    const onSubmit: SubmitHandler<iData> = (data) => {
        login(data)
    }
    return (
       <Container>
         <MainStyled>
            <section>
                <FormStyled onSubmit={handleSubmit(onSubmit)}>
                    <p>Login</p>
                    <Input label="Email" id="Email" type="email" placeholder="Digite seu email" {...register("email")}/> 
                    <Input label="Senha" id="Senha" type="password" placeholder="Digite sua senha" {...register("password")}/> 
                    <button type="submit">Logar</button>
                    <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                    <Link to="/register"> 
                        <button>Cadastrar</button>
                    </Link>
                </FormStyled>
            </section>
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
        </MainStyled>
       </Container>
    )
}