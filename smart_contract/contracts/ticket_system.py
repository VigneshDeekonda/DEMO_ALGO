import beaker

class TicketSystem(beaker.Application):
    def __init__(self):
        super().__init__()
        self.tickets = beaker.GlobalState()

    @beaker.public
    def buy_ticket(self, ticket_id: int, buyer: str):
        if ticket_id in self.tickets:
            raise Exception('Ticket already sold')
        self.tickets[ticket_id] = buyer

    @beaker.public
    def transfer_ticket(self, ticket_id: int, new_buyer: str):
        if ticket_id not in self.tickets:
            raise Exception('Ticket does not exist')
        self.tickets[ticket_id] = new_buyer

    @beaker.public
    def get_owner(self, ticket_id: int) -> str:
        return self.tickets.get(ticket_id, 'Ticket does not exist')

# Attach the application to the Beaker environment
app = TicketSystem()