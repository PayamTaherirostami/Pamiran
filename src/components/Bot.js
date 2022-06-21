import {Chatbot} from 'react-chatbot-kit';
import config from '../config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import '../chat.css'
const Bot = () => {
    return ( <div className='chat'>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div> );
}
 
export default Bot;