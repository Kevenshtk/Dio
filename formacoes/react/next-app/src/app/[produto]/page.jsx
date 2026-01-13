export default async function ProdutoPage({ params }) {
    const { produto } = await params;

    return <h1>Página de {produto}</h1>
}