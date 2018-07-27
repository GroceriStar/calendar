import React, { 
  Component 
} from 'react';
import { ListGroup, 
    ListGroupItem 
} from 'reactstrap';

class TimeLine extends Component {
    transformTime(time) {
        if(this.props.mode) {
            let timeSplit = time.split(':', 2);
            if(timeSplit[0] > 12) {
                timeSplit[0] -= 12;
                timeSplit[0] = '0' + timeSplit[0]
            }
            let result = timeSplit.join(':');
            return result;
        }
        else {
            return time;
        }
    }
    
    render() {
        return (
                <div className='timedHeight'>
                    <ListGroup>
                        <ListGroupItem>{this.transformTime('09:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('10:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('11:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('12:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('13:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('14:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('15:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('16:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('17:00')}</ListGroupItem>
                        <ListGroupItem>{this.transformTime('18:00')}</ListGroupItem>
                    </ListGroup>
                </div>
        );
    }
}

export { TimeLine }