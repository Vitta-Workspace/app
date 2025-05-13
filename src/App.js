// App.js - Main component for the DentalSpace marketplace

import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // You would need to create this SVG file

function App() {
  const [activeTab, setActiveTab] = useState('find'); // 'find' or 'list'

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
            <form className="search-form">
              <h3>Ache consultórios disponíveis</h3>

              <div className="form-field">
                <label>Seu Nome</label>
                <input type="text" placeholder="Nome" />
              </div>

              <div className="form-field">
                <label>Seu Email</label>
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-field">
                <label>Localização</label>
                <input type="text" placeholder="Cidade ou CEP" />
              </div>

              <div className="form-field">
                <label>Descrição</label>
                <input type="text" placeholder="O que você procura?" />
              </div>

              <button type="submit" className="primary-button">Procure Consultórios Disponíveis</button>
            </form>
          </div>
        )}

        {/* List Your Clinic Section (Clinic Owner View) */}
        {activeTab === 'list' && (
          <div className="list-clinic-section">
            <form className="listing-form">
              <h3>Informação do Consultório</h3>

              <div className="form-field">
                <label>Título do Anúncio</label>
                <input type="text" placeholder="Entre com o título" />
              </div>

              <div className="form-field">
                <label>Address</label>
                <input type="text" placeholder="Entre com o endereço" />
              </div>

              <div className="form-field">
                <label>Descrição</label>
                <textarea placeholder="Entre com a descrição" rows="4"></textarea>
              </div>

              <div className="form-field">
                <label>Preço (por mês)</label>
                <input type="text" placeholder="Entre com o preço mensal" />
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
    </div>
  );
}

export default App;