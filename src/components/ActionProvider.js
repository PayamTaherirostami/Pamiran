// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   msgHandler = () => {
     const message = this.createChatBotMessage("Hi, pls type one of these items to get the info")
     this.setChatbotMessage(message)
   };
   ordersHandler =() =>{
    const message = this.createChatBotMessage("here is your first ten orders:",{
      widget:'orders'
    });
    this.setChatbotMessage(message)
   };

   setChatbotMessage= (message) => {
     this.setState(state => ({ ...state, messages: [...state.messages, message] }))
   };
 };
 
 export default ActionProvider;