import shoppingList from '../data/shoppingList'

export default function ShoppingList(){
return(
<div>
    <h6>A minha Lista de Compras</h6>
        {shoppingList.map((item) => 
        <p key={item.item}> {item.item} - {item.qt}</p>
        )}
</div>)
}