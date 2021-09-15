import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import Button from 'components/Button';
import LoaderSpinner from 'components/LoaderSpinner';
import { toast } from 'react-toastify';

import styles from './RegisterView.module.scss';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      (!name || e.target.name.value.trim() === '') &&
      (!email || e.target.email.value.trim() === '') &&
      (!password || e.target.password.trim() === '')
    ) {
      toast.warn('Fill in the fields "Name", "Email" and "Password"');
      return;
    }

    if (!name || e.target.name.value.trim() === '') {
      toast.warn('Field "Name" is empty');
      return;
    }

    if (!email || e.target.email.value.trim() === '') {
      toast.warn('Field "Email" is empty');
      return;
    }

    if (!password || e.target.password.value.trim() === '') {
      toast.warn('Enter your password');
      return;
    }

    if (password.length < 8 || e.target.password.value.length < 8) {
      toast.warn('Enter a password of 8 characters');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {/* <PageHeading text="Registration page" /> */}

      <form onSubmit={handleSubmit} className={styles.Form} autoComplete="off">
        <label className={styles.Label}>
          <span className={styles.LabelText}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            className={styles.Input}
          />
        </label>

        <label className={styles.Label}>
          <span className={styles.LabelText}>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            className={styles.Input}
          />
        </label>

        <label className={styles.Label}>
          <span className={styles.LabelText}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            className={styles.Input}
          />
        </label>

        <Button type="submit" contentBtn="Sign up" />

        {isLoading && <LoaderSpinner />}
      </form>
    </div>
  );
}
