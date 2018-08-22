import React, {
  Component
} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ScheduleRender } from './Schedule';
import { TimeLine } from './Timeline';

import './WorkSchedule.css';
import data from '@groceristar/groceristar-fetch/groceristar'

class WorkSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: false
        };
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode() {
        this.setState({
            mode: !this.state.mode
        })
    }


    render() {
      console.log(data.getIngredients());
      console.log(data.getGrocery());
      console.log(data.getUsers());
      console.log(data.getDepartments());
      console.log(data.getAllDepartments());
      console.log(data.getAllIngredientsByOneDepartment('Fresh vegetables'));
      return(
		<div>
			<div className='header'>
				<h1>
					Schedule
				</h1>
				<button onClick={this.changeMode}>Switch Mode</button>
			</div>

			<Container>
				<Row>
                    <Col sm="2">
					<div className='timeline'>
						<TimeLine mode={this.state.mode}/>
					</div>
                    </Col>

					<ScheduleRender mode={this.state.mode}/>
				</Row>
			</Container>
		</div>
        );
    }
}

export { WorkSchedule }
