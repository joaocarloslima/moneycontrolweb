"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    }
}

export default function CategoryFormPage() {

    const [state, formAction, pending] = useActionState(createCategory, initialState)

    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >
                        Cadastrar Categoria
                    </h2>

                    <form action={formAction} className="space-y-4">
                        <Input name="name" placeholder="nome da categoria" />
                        <Input name="icon" placeholder="ícone" />

                        <div className="flex justify-around">
                            <Button variant="outline" asChild>
                                <Link href="/categories">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}