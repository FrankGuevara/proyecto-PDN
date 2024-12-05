'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoMicrosoft } from "react-icons/io5";
import Image from "next/image";

const SocialIcons = () => (
    <div className="mt-5 mx-auto flex w-[80%] justify-between items-center">
        <FaGoogle className="w-[50px] h-[50px] cursor-pointer text-white" />
        <TfiFacebook className="w-[50px] h-[50px] cursor-pointer  text-white" />
        <IoLogoMicrosoft className="w-[50px] h-[50px] cursor-pointer  text-white" />
    </div>
);

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    function onSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Validar las credenciales
        if (email === 'test@gmail.com' && password === 'test') {
           
            router.push('/dashboard');
        } else {
            setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    }

    return (
        <main className="grid grid-cols-2">
            <section className="h-[100vh] bg-blue-900 flex justify-center items-center">
                <div className="w-[60%] text-center">
                    <h1 className="text-white font-bold text-[32px]">INICIO DE SESIÓN</h1>
                    <p className="text-white font-normal text-[18px] w-[50%] mx-auto my-12">
                        Ingrese con sus credenciales.
                    </p>

                    <form className="w-full text-left" onSubmit={onSubmitForm}>
                        <div className="mb-8">
                            <label className="mb-2 block text-white font-semibold" htmlFor="email">
                                Correo Electrónico:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-white text-black rounded-md block w-full text-md p-3"
                                placeholder="ejemplo@correo.com"
                                aria-label="Correo Electrónico"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="mb-2 block text-white font-semibold" htmlFor="password">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-white text-black rounded-md block w-full text-md p-3"
                                placeholder="Ingrese tu contraseña"
                                aria-label="Contraseña"
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-white font-semibold text-sm mb-4">{errorMessage}</p>
                        )}

                        <div className="mb-8 flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                name="remember-me"
                                className="mr-2 w-5 h-5"
                            />
                            <label htmlFor="remember-me" className="text-white text-md">
                                Recordarme en este dispositivo
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-blue-900 font-bold text-lg p-3 rounded-md hover:bg-gray-100 transition"
                        >
                            Iniciar Sesión
                        </button>

                        <div className="my-8 border-t border-white"></div>

                        <div className="w-[60%] mx-auto">
                            <SocialIcons />
                        </div>
                    </form>
                </div>
            </section>

            <section className="bg-gray flex w-full items-center justify-center">
                <div>
                    <Image className="block" src="/images/login-img.jpg" alt="Logo" width={600} height={400} />
                    <p className="text-blue-900 font-bold text-2xl block text-center">
                        ¡Bienvenido de nuevo!
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;