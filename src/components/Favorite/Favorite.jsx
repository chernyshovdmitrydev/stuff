import React from "react";
import styles from "../../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromFavorite } from "../../features/user/userSlice";

function Favorite() {
  const dispatch = useDispatch();
  const { favorite } = useSelector(({ user }) => user);
  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id));
  };
  const addToCart = (item) => {
    dispatch(addItemToCart({ ...item, quantity: this +1 }));
  };
  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>You favorite</h2>
      <div className={styles.list}>
        {favorite.map((item) => {
          const { title, category, images, price } = item;
          return (
            <div className={styles.item}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${images[0]})` }}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{title}</h3>
                <div className={styles.category}>{category.name}</div>
              </div>
              <div className={styles.price}>{price}$</div>

              <button onClick={() => addToCart(item)}>Add to cart</button>
              <div></div>
              <div className={styles.close} onClick={() => removeItem(item.id)}>
                <svg className="icon">
                  <use
                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Favorite;
