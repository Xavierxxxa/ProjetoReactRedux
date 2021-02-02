import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Products() {

    const dispatch = useDispatch()
    const products = useSelector((state) =>state.products);

    function exibirTodos() {
        let elementos = document.getElementsByClassName('produtos');
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
        
    }

    function exibir_categorias(categorias) {
        let elementos = document.getElementsByClassName('produtos');
        for(let i = 0; i < elementos.length; i++){
            if (categorias == elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }

    return (
        
        <div style = {Games} className="Games">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categoria
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button" onClick={exibirTodos}>Todos</button>
                    <button class="dropdown-item" type="button" onClick={() => exibir_categorias('playstation')}>Playstation</button>
                    <button class="dropdown-item" type="button" onClick={() => exibir_categorias('xbox')}>Xbox</button>
                    <button class="dropdown-item" type="button" onClick={() => exibir_categorias('nintendo')}>Nintendo</button>
                </div>
            </div>
            <h2 className="display-5 text-center text-white ">Produtos Disponíveis</h2>

            <div className="row">
            {products.map(item => (
                <div className="container col-md-3 text-center produtos">
                    <div key={item.id}  id={item.categoria}>
                        <p>{item.name}</p>
                        <p>R$ {item.price.toFixed(2)}</p>
                        <button
                        
                        onClick={()=> dispatch({type: "ADD_TO_CART", id: item.id})}
                        
                        >Adicionar ao carrinho</button>
                    </div>       
                    <br/>
                </div>
            ))}
            </div>
        </div>
    )
}

const Games = {
    height: "100vh",
    width: "50vw",
    background: 'black',
    padding: '10px',
};




//Adicionar os estilos posteriormente