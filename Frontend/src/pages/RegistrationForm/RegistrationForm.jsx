import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './index.css'
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
            <div className="title-container">
                <h1 className="title">Вход/Регистрация</h1>
            </div>
            <div className="subtitle-container">
                <p className="subtitle">Войдите, чтобы пользоваться сайтом Техночел</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Укажите номер:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className="form-group">
                    <label>Укажите почту:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label>Укажите пароль:</label>
                    <input
                        type="password"
                        className="form-control"
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