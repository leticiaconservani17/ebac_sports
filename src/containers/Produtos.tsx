// containers/Produtos.tsx
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { Produto as ProdutoType } from '../App'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav) => fav.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
