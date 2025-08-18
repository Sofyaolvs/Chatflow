const {default: makeWASocket, DisconnectReason, useMultiFileAuthState} = require('@whiskeysockets/baileys')
const qrcode = require('qrcode-terminal')

class WhatsAppBot {
    constructor(){
        this.sock = null;
        this.isConnected = false;
        this.qrCode = null;
        this.conversations =[]
        this.stats ={
            totalConversations:0,
            todayReceived:0,
            todaySend:0,
            responseRate:0
        }

        this.responses = {
      "oi|olá|ola|hey|bom dia|boa tarde|boa noite": 
        "Olá! 😊 Bem-vindo(a)! Como posso ajudar?\n\n1️⃣ Ver preços\n2️⃣ Horários\n3️⃣ Agendar\n4️⃣ Localização\n5️⃣ Atendente",
      
      "1|preço|precos|valor|valores": 
        "💰 *Nossos Preços:*\n\n✂️ Corte masculino: R$ 30\n✂️ Corte feminino: R$ 40\n💅 Manicure: R$ 25\n💅 Pedicure: R$ 30\n💆 Massagem: R$ 50\n\n💳 Aceitamos: Dinheiro, Pix, Cartão\nQuer agendar? Digite *3*",
      
      "2|horario|horários|funcionamento": 
        "🕐 *Horário de Funcionamento:*\n\nSeg-Sex: 9h às 18h\nSábado: 9h às 15h\nDomingo: Fechado\n\n✨ Estamos sempre prontos para atender!\nPosso ajudar em mais alguma coisa?",
      
      "3|agendar|agendamento|marcar": 
        "📅 *Fazer Agendamento:*\n\nPara agendar, preciso saber:\n1. Qual serviço deseja?\n2. Que dia prefere?\n3. Manhã ou tarde?\n4. Seu nome?\n\nVamos começar! Qual serviço gostaria? 😊",
      
      "4|local|endereço|endereco|onde|localização": 
        "📍 *Nossa Localização:*\n\n🏢 Salão Beleza & Estilo\n📍 Rua das Flores, 123 - Centro\n🏙️ São Paulo/SP\n\n🚗 Temos estacionamento gratuito!\n🚌 Próximo ao metrô (5min)\n\nPrecisa de mais informações?",
      
      "5|atendente|pessoa|humano|falar": 
        "👤 *Conectando com atendente...*\n\nAguarde um momento! Vou transferir você para um dos nossos atendentes.\n\n⏰ Tempo médio: 2-3 minutos\n\nEnquanto isso, posso tentar ajudar com sua dúvida! 😊",
      
      "pix|cartão|cartao|pagamento|formas": 
        "💳 *Formas de Pagamento:*\n\n✅ Dinheiro\n✅ Pix (5% desconto!)\n✅ Cartão de Débito\n✅ Cartão de Crédito (até 3x)\n\n💡 Pagando no Pix você economiza 5%!\nQuer agendar? Digite *3*",
      
      "obrigado|obrigada|valeu|thanks|vlw": 
        "😊 Por nada! Foi um prazer ajudar!\n\n✨ Estamos sempre aqui quando precisar!\n📱 Salve nosso contato\n⭐ Nos indique para amigos\n\nAté logo! 👋",
      
      "tchau|bye|adeus|até|flw": 
        "👋 Tchau! Obrigado pelo contato!\n\n😊 Foi ótimo falar com você!\nVolte sempre que precisar!\n\n⭐ Até a próxima!"
    };
  }

  async connect(){
    try{
        console.log("inciciando conexão com o zap")

        const{state,saveCreds} = await useMultiFileAuthState('auth')

        this.sock = makeWASocket({
            auth:state,
            printQRInTerminal:false
        })
    }
  }

}
