// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state
  }

  parse(message) {
    const lower = message.toLowerCase();
    if(lower.includes("hello")) {
      this.actionProvider.msgHandler()
    }
    if(lower.includes("orders")){
      this.actionProvider.ordersHandler()
    }
  }
}

export default MessageParser;