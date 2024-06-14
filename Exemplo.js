// Definição da estrutura de dados

// Objeto para representar um hotel
function Hotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosDisponiveis;
  }
  
  // Objeto para representar uma reserva
  function Reserva(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }
  
  // Array para armazenar todos os hotéis
  var hoteis = [];
  
  // Array para armazenar todas as reservas
  var reservas = [];
  
  // Funções do sistema
  
  // Adicionar um novo hotel
  function adicionarHotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
    var hotel = new Hotel(id, nome, cidade, quartosTotais, quartosDisponiveis);
    hoteis.push(hotel);
    console.log("Hotel adicionado com sucesso!");
  }
  
  // Buscar hotéis por cidade
  function buscarHoteisPorCidade(cidade) {
    var hoteisNaCidade = hoteis.filter(function(hotel) {
      return hotel.cidade.toLowerCase() === cidade.toLowerCase();
    });
    console.log("Hotéis em " + cidade + ":");
    hoteisNaCidade.forEach(function(hotel) {
      console.log(hotel.nome);
    });
  }
  
  // Fazer reserva em um hotel
  function fazerReserva(idReserva, idHotel, nomeCliente) {
    var hotel = hoteis.find(function(hotel) {
      return hotel.id === idHotel;
    });
  
    if (!hotel) {
      console.log("Hotel não encontrado!");
      return;
    }
  
    if (hotel.quartosDisponiveis === 0) {
      console.log("Desculpe, não há quartos disponíveis neste hotel.");
      return;
    }
  
    var reserva = new Reserva(idReserva, idHotel, nomeCliente);
    reservas.push(reserva);
    hotel.quartosDisponiveis--;
    console.log("Reserva feita com sucesso!");
  }
  
  // Cancelar reserva
  function cancelarReserva(idReserva) {
    var reservaIndex = reservas.findIndex(function(reserva) {
      return reserva.idReserva === idReserva;
    });
  
    if (reservaIndex === -1) {
      console.log("Reserva não encontrada!");
      return;
    }
  
    var reserva = reservas[reservaIndex];
    var hotel = hoteis.find(function(hotel) {
      return hotel.id === reserva.idHotel;
    });
  
    if (!hotel) {
      console.log("Hotel não encontrado!");
      return;
    }
  
    reservas.splice(reservaIndex, 1);
    hotel.quartosDisponiveis++;
    console.log("Reserva cancelada com sucesso!");
  }
  
  // Listar todas as reservas
  function listarReservas() {
    console.log("Lista de reservas:");
    reservas.forEach(function(reserva) {
      var hotel = hoteis.find(function(hotel) {
        return hotel.id === reserva.idHotel;
      });
      console.log("ID da Reserva:", reserva.idReserva, "| Nome do Cliente:", reserva.nomeCliente, "| Hotel:", hotel.nome);
    });
  }
  
  // Exemplo de uso do sistema
  
  // Adicionar alguns hotéis
  adicionarHotel(1, "Hotel A", "São Paulo", 50, 50);
  adicionarHotel(2, "Hotel B", "Rio de Janeiro", 30, 20);
  adicionarHotel(3, "Hotel C", "Salvador", 40, 40);
  
  // Listar hotéis em uma cidade específica
  buscarHoteisPorCidade("São Paulo");
  
console.log(hoteis)

  // Fazer algumas reservas
  fazerReserva(1, 1, "Cliente 1");
  fazerReserva(2, 2, "Cliente 2");
  fazerReserva(3, 1, "Cliente 3");
  
console.log(hoteis)

/*   // Cancelar uma reserva
  cancelarReserva(2);
  
  // Listar todas as reservas
  listarReservas(); */