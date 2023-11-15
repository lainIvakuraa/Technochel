import React, { useState } from 'react';
import classes from './Registration.module.css';
import Container from 'react-bootstrap/esm/Container';
const RegistrationForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneNumberChange = e => {
        setPhoneNumber(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // логика обработки отправки формы
    };

    return (
        <Container>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Вход/Регистрация</h1>
            </div>
            <div className={classes.subtitleContainer}>
                <p className={classes.subtitle}>Войдите, чтобы пользоваться сайтом Техночел</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                    <label>Укажите номер:</label>
                    <input
                        type="text"
                        className={classes.formControl}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label>Укажите почту:</label>
                    <input
                        type="email"
                        className={classes.formControl}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label>Укажите пароль:</label>
                    <input
                        type="password"
                        className={classes.formControl}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Готово</button>
            </form>

        </Container>
    );
};

export default RegistrationForm;