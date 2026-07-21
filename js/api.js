const API_URL = 'https://localhost:7056/api';

const Api = {
    // Auth
    async login(usuario, senha) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuario, senha })
        });
        return res;
    },

    // Animais
    async getAnimaisDisponiveis() {
        const res = await fetch(`${API_URL}/animais/disponiveis`);
        return await res.json();
    },

    async getAnimal(id) {
        const res = await fetch(`${API_URL}/animais/${id}`);
        return await res.json();
    },

    async postAnimal(dados) {
        const res = await fetch(`${API_URL}/animais`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(dados)
        });
        return res;
    },

    async deleteAnimal(id) {
        const res = await fetch(`${API_URL}/animais/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return res;
    },

    async marcarAdotado(id) {
        const res = await fetch(`${API_URL}/animais/${id}/adotado`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return res;
    },

    // Solicitações
    async getSolicitacoes() {
        const res = await fetch(`${API_URL}/solicitacoes`, {
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return await res.json();
    },

    async atualizarStatusSolicitacao(id, status) {
        const res = await fetch(`${API_URL}/solicitacoes/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(status)
        });
        return res;
    },

    async postSolicitacao(dados) {
        const res = await fetch(`${API_URL}/solicitacoes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        return res;
    },

    // Doações
    async getDoacoes() {
        const res = await fetch(`${API_URL}/doacoes`, {
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return await res.json();
    },

    async getTotal() {
        const res = await fetch(`${API_URL}/doacoes/total`);
        return await res.json();
    },

    async postDoacao(dados) {
        const res = await fetch(`${API_URL}/doacoes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        return res;
    },

    async confirmarDoacao(id) {
        const res = await fetch(`${API_URL}/doacoes/${id}/confirmar`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return res;
    },

    async cancelarDoacao(id) {
        const res = await fetch(`${API_URL}/doacoes/${id}/cancelar`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${getToken()}` }
        });
        return res;
    }
};

// Helpers de token
function getToken() {
    return localStorage.getItem('patas_token');
}

function salvarToken(token, usuario) {
    localStorage.setItem('patas_token', token);
    localStorage.setItem('patas_usuario', usuario);
}

function removerToken() {
    localStorage.removeItem('patas_token');
    localStorage.removeItem('patas_usuario');
}

function estaLogado() {
    return !!getToken();
}