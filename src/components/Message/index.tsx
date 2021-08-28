import { error } from 'console';
import react, { FC} from 'react';
import { Container } from './styles'
interface MessagePros {
   msg: string;
   type: 'danger' | 'success'; 
}

const Message: FC<MessagePros> = ({type ,msg})=>{
   let typeClass = '';
  if(type === 'danger'){
      typeClass= 'is-danger'
    }
   if(type === 'success'){
      typeClass= 'is-success'
    }
   
   return(
    <Container>
      <div style={ msg? { padding:'10px', border: '1px solid #ddd'}: {padding:'10px'} } className={`message${typeClass}`}>
         <div className={`message-body`}>
            {msg}
         </div>
      </div>
    </Container>
 )
}

export default Message;