// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";
import Orders4Bot from "./components/Orders4Bot";

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Pamiran`)],
  botName:"PamiranBot",
  customComponents:{
      botAvatar:(props)=> <BotAvatar {...props} />
  },
  customStyles: {
    // botMessageBox: {
    // backgroundColor: '#376B7E',
    
    // },
    // chatButton: {
    // backgroundColor: '#5ccc9d',
    // },
  },
  state:{
      orders: []
  },
  widgets:[

      {
        widgetName: "orders",
        widgetFunc: (props) => <Orders4Bot {...props} />,
        mapStateToProps: ["orders"],
        // props: {}
      }
  ]
}

export default config;