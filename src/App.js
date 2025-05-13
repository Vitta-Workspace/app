import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // You would need to create this SVG file
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [activeTab, setActiveTab] = useState('find');
  const [patientForm, setPatientForm] = useState({
    name: '',
    email: '',
    location: '',
    description: ''
  });

  const [clinicForm, setClinicForm] = useState({
    title: '',
    address: '',
    name: '',
    email: '',
    description: '',
    price: ''
  });

  const sendEmail = (e, type) => {
    e.preventDefault();

    const templateParams = type === 'find'
      ? {
        name: patientForm.name,
        email: patientForm.email,
        location: patientForm.location,
        description: patientForm.description,
      }
      : {
        title: clinicForm.title,
        name: clinicForm.name,
        email: clinicForm.email,
        address: clinicForm.address,
        description: clinicForm.description,
        price: clinicForm.price,
      };

    const templateId = type === 'find' ? 'template_8zcc7sp' : 'template_vb2ntre';

    emailjs.send(
      'service_kxa0ghi',
      templateId,
      templateParams,
      '69-BimM9nme3CX0my'
    ).then(() => {
      toast.success('✅ Mensagem enviada! Em breve entraremos em contato.', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }).catch(() => {
      toast.error('❌ Erro no envio. Tente novamente.', {
        position: "top-center",
        autoClose: 5000
      });
    });
  };


  return (
    <div className="dental-space">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.075 0-11-4.925-11-11S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm-3-15a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm-3 10c3.314 0 6-2.686 6-6h-12c0 3.314 2.686 6 6 6z" fill="#0D9488" />
          </svg>
          <h1>Vitta</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Localize ou Anuncie Consultórios</h2>
        <p className="subtitle">O Marketplace que conecta profissionais da saúde com espaços disponíveis.</p>

        {/* Tabs */}
        <div className="user-type-tabs">
          <button
            className={`tab ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => setActiveTab('find')}
          >
            Estou procurando um consultório
          </button>
          <button
            className={`tab ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Quero anunciar meu consultório
          </button>
        </div>

        {/* Search Section (Patient View) */}
        {activeTab === 'find' && (
          <div className="search-section">
            <form className="search-form" onSubmit={(e) => sendEmail(e, 'find')}>
              <h3>Ache consultórios disponíveis</h3>

              <div className="form-field">
                <label>Seu Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  value={patientForm.name}
                  onChange={(e) => setPatientForm({ ...patientForm, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Seu Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={patientForm.email}
                  onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Localização</label>
                <input
                  type="text"
                  placeholder="Cidade ou CEP"
                  value={patientForm.location}
                  onChange={(e) => setPatientForm({ ...patientForm, location: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Especialidade</label>
                <select
                  value={patientForm.description}
                  onChange={(e) => setPatientForm({ ...patientForm, description: e.target.value })}
                >
                  <option value="">Selecione uma especialidade</option>
                  <option value="Odontologia">Odontologia</option>
                  <option value="Médico">Médico</option>
                  <option value="Psicologia">Psicologia</option>
                  <option value="Fisioterapia">Fisioterapia</option>
                  <option value="Fonoaudiologia">Fonoaudiologia</option>
                  <option value="Nutrição">Nutrição</option>
                </select>
              </div>


              <button type="submit" className="primary-button">Procure Consultórios Disponíveis</button>
            </form>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="list-clinic-section">
            <form className="listing-form" onSubmit={(e) => sendEmail(e, 'list')}>
              <h3>Informação do Consultório</h3>

              <div className="form-field">
                <label>Título do Anúncio</label>
                <input
                  type="text"
                  placeholder="Entre com o título"
                  value={clinicForm.title}
                  onChange={(e) => setClinicForm({ ...clinicForm, title: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Seu Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  value={clinicForm.name}
                  onChange={(e) => setClinicForm({ ...clinicForm, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Seu Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={clinicForm.email}
                  onChange={(e) => setClinicForm({ ...clinicForm, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder="Entre com o endereço"
                  value={clinicForm.address}
                  onChange={(e) => setClinicForm({ ...clinicForm, address: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Especialidade</label>
                <select
                  value={clinicForm.description}
                  onChange={(e) => setClinicForm({ ...clinicForm, description: e.target.value })}
                >
                  <option value="">Selecione uma especialidade</option>
                  <option value="Odontologia">Odontologia</option>
                  <option value="Médico">Médico</option>
                  <option value="Psicologia">Psicologia</option>
                  <option value="Fisioterapia">Fisioterapia</option>
                  <option value="Fonoaudiologia">Fonoaudiologia</option>
                  <option value="Nutrição">Nutrição</option>
                </select>
              </div>


              <div className="form-field">
                <label>Preço (por mês)</label>
                <input
                  type="text"
                  placeholder="Entre com o preço mensal"
                  value={clinicForm.price}
                  onChange={(e) => setClinicForm({ ...clinicForm, price: e.target.value })}
                />
              </div>

              <button type="submit" className="primary-button">Anuncie Minha Clínica</button>
            </form>
          </div>
        )}
      </section>

      {/* Seção Como Funciona */}
      <section className="how-it-works" id="how-it-works">
        <h2>Como Funciona</h2>

        <div className="steps-container">
          {/* Para Pacientes */}
          <div className="steps-column">
            <h3>Para Pacientes</h3>

            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Pesquise por clínicas</h4>
                <p>Informe sua localização e especialidade desejada</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Receba os anuncios disponíveis no seu email</h4>
                <p>Fale diretamente com o propretário!</p>
              </div>
            </div>

          </div>

          {/* Para Donos de Clínicas */}
          <div className="steps-column">
            <h3>Para Donos de Clínicas</h3>

            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Anuncie sua clínica</h4>
                <p>Descreva seu espaço e equipamentos</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Receba reservas</h4>
                <p>Ganhe com o tempo ocioso da sua clínica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25c-6.075 0-11-4.925-11-11S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm-3-15a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm-3 10c3.314 0 6-2.686 6-6h-12c0 3.314 2.686 6 6 6z" fill="#FFFFFF" />
              </svg>
              <h2>Vitta</h2>
            </div>
            <p>O Marketplace que conecta profissionais da saúde com espaços disponíveis.</p>
          </div>
        </div>

        <p className="copyright">© 2025 Vitta. Todos os direitos reservados.</p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;