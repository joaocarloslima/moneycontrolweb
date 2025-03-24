import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CircleAlert } from "lucide-react";


//server actions
async function getCategories() {
    const response = await fetch("http://localhost:8080/categories")
    return await response.json()
}


export default async function CategoriesPage() {
    const data: Array<Category> = await getCategories()

    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >Categorias</h2>

                    {(data.length == 0) ?
                        <Alert>
                            <CircleAlert />
                            <AlertDescription>
                                Nenhuma categoria cadastrada
                            </AlertDescription>
                        </Alert>
                        : ""
                    }

                    {data.map(category => <CategoryItem key={category.id} category={category} />)}

                </div>
            </main>
        </>
    )
}