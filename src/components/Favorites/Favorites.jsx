
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../pages/user/HomePage/Section/Card/Card";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>Sevimlər</h2>
      <div>
        {favorites.map((favoriteItem) => (
          <Card key={favoriteItem.id} card={favoriteItem} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;


















// import React from "react";
// import { useSelector } from "react-redux";
// import { useAddFavoriteMutation, useGetFavoritesQuery } from "./../../redux/slices/favoritesSlice";
// import Card from "../../pages/user/HomePage/Section/Card/Card";

// const FavoritesPage = () => {
//   const accessToken = useSelector((state) => state.favorites.accessToken);
//   const { data: favorites, error, isLoading } = useGetFavoritesQuery();
//   const [addFavorite] = useAddFavoriteMutation();

//   const handleAddToFavorite = (productId) => {
//     if (!accessToken) {
//       console.error("Access token tapılmadı!");
//       return;
//     }
//     addFavorite(productId);
//   };

//   if (isLoading) return <p>Yüklənir...</p>;
//   if (error) return <p>Səhv baş verdi: {error.message}</p>;

//   return (
//     <div>
//       <h2>Sevimlilər</h2>
//       <ul>
//         {favorites?.map((item) => (
//           <Card key={item.id} card={item} onAddToFavorite={handleAddToFavorite} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FavoritesPage;







// // import React from 'react'
// // import {products} from '../../../src/products.js'

// // const Favorites = ({ data = products }) => {
// //   console.log(data)
// //   const {name, price} = data
// //   return (
// //     <div>Favorites
// //       {data.map((item, index) => (
// //         <div key={index}>
// //           <p>{item.name}</p>
// //           <p>{item.price}</p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default Favorites