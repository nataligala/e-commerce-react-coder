import React from 'react';
import { Item } from '../Item/Item';


export const ItemList = ( {productos}) => {

    return (

      <div style={{marginTop: '50px', marginBottom: '50px'}}>
            <div style={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
                {productos.map((prod) => <Item key={prod.id} {...prod}/>)}
            </div>
        </div>
    );

}       