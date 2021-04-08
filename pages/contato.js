import { useState } from "react";
import emailjs from 'emailjs-com';

const contato = () => {
    const [emailSent, setEmailSent] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('gmail', 'ambozfotografia_template', event.target, 'user_uTafXQ7gWdnerV4hHRT3D')
            .then((result) => {
                console.log(result.text);

                setEmailSent(true);
                setDisabled(false);
            }, (error) => {
                console.log(error.text);

                setEmailSent(false);
                setDisabled(true);
            });

        event.target.reset();
    }

    return (
        <div className="container container-fluid">
            <form className="form" onSubmit={sendEmail}>
                <h1>Entre em contato conosco!</h1>
                <br />

                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nome *</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Nome completo" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="email" className="form-label">E-mail *</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="E-mail para contato" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="fone" className="form-label">Telefone *</label>
                    <input type="text" className="form-control" name="fone" id="fone" maxLength="14" placeholder="(XX) XXXXXXXXX" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensagem *</label>
                    <textarea type="text" className="form-control" name="message" id="message" placeholder="Mensagem" rows="3" required />
                </div>

                {emailSent === true && <label className="success-msg">Email enviado com sucesso!</label>}
                {emailSent === false && <label className="error-msg">Erro ao enviar email.</label>}
                <br />

                <button className="btn btn-primary" type="submit" disabled={disabled}>
                    Enviar
                </button>
            </form>
        </div>

    )
}

export default contato;
