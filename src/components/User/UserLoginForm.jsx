import React, { useState } from "react";

import styles from "../../styles/User.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

function UserLoginForm({closeForm, toggleCurrentFormType}) {
  const dispatch = useDispatch()
    const [values, setValues] = useState({
        email:'',
        password:'',
    })

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleSumbit = (e) => {
      e.preventDefault();

      const isNotEmpty = Object.values(values).every((val) => val);

      if(!isNotEmpty) return;

      dispatch(loginUser(values));
      closeForm()
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Log in</div>

      <form className={styles.form} onSubmit={handleSumbit}>
      <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={values.email}
            onChange={handleChange}
            required
          /> </div>
           <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            onChange={handleChange}
            required
          /></div>
        <div className={styles.link} onClick={() => toggleCurrentFormType('signup')}>Create an account</div>
        <button className={styles.submit} type='submit'>Login</button>
      </form>
    </div>
  );
}

export default UserLoginForm;
