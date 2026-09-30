function createVisitor(name, age, ticketId) {
    return {
        name: name,
        age: age,
        ticketId: ticketId
    }
}

function revokeTicket(visitante){
    visitante.ticketId = null
    return visitante;
    
}

function simpleticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined) {
        return "invalid ticket !!!";
    }

    if (tickets[ticketId] === null) {
        return "invalid ticket !!!";
    }

    return tickets[ticketId];
}

function gtcVersion(visitante) {
    if (visitante.gtc) {
        return visitante.gtc.version;
    }
}

const visitante = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

console.log(visitante);

revokeTicket(visitante);

console.log(visitante);

const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

console.log(simpleticketStatus(tickets, 'RE90VAW7'));

console.log(simpleticketStatus(tickets, '0H2AZ123'));

console.log(simpleticketStatus(tickets, '23LA9T41'));

const nuevoVisitante = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

console.log(gtcVersion(visitante));
console.log(gtcVersion(nuevoVisitante));