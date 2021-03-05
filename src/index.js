import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return(
        <div className="ui container comments">
        <ApprovalCard>
         <CommentDetail author = "Sanjam" timeAgo="Today at 12:00AM" comment="Sexcc boiiis!" url="https://source.unsplash.com/random" />
         </ApprovalCard>
         <ApprovalCard>
         <CommentDetail author= "Jashan" timeAgo="Yesterday at 1:05PM" comment="Niceeee myn" url="https://source.unsplash.com/random"/></ApprovalCard>
         <ApprovalCard> <CommentDetail author="Niyati" timeAgo="Today at 10:30PM" comment="Sweeetttttt" url="https://source.unsplash.com/random"/></ApprovalCard>
        </div>
        );
};

ReactDOM.render(<App />, document.getElementById('root'));