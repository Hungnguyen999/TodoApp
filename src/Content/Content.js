import './Content.css';
import TodoItem from '../TodoItem/TodoItem';
import FinishedItem from '../FinishedItem/FinishedItem';
import SendDataAnimation from '../SendDataAnimation/SendData';
function Content() {

    return (
        <div class="container">
            <div class="row">
                <div class="col-4 todo-list">
                    <div class="todo-title">Todo</div>
                    <TodoItem itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                    <TodoItem itemName="Duc anh" itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                    <TodoItem itemName="Vl" itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                    <TodoItem itemName="VC" itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                </div>
                <div class="col-4 animation-send-data">
                    <SendDataAnimation />
                </div>
                <div class="col-4 finished-list">
                    <div class="finished-title">Finished</div>
                    <FinishedItem itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                    <FinishedItem itemName="Duc anh" itemTitle="Nguyen Duy Hung" itemDescription="hehe" itemName="Hung" itemImage={ 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }/>
                </div>
            </div>
        </div>
    );
}
export default Content;