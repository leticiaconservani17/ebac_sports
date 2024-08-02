import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      // Verifica se o produto já está nos favoritos
      const produtoIndex = state.itens.findIndex((p) => p.id === favorito.id)

      if (produtoIndex !== -1) {
        // Remove o produto dos favoritos se ele já estiver na lista
        state.itens.splice(produtoIndex, 1)
      } else {
        // Adiciona o produto aos favoritos se ele não estiver na lista
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
