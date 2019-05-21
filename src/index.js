import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    username={faker.internet.userName()}
                    avatar={faker.image.avatar()}
                    date="now"
                    text="nice blog!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    username={faker.internet.userName()}
                    avatar={faker.image.avatar()}
                    date="Today at 6:03PM"
                    text="love it :)" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                username={faker.internet.userName()}
                avatar={faker.image.avatar()}
                date="Yesterday at 3:52PM"
                text="good idea!" />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));