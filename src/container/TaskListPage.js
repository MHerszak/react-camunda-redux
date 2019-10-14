import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { List, Grid } from "semantic-ui-react";
import { loadTasks } from "./../store/actionTypes";
import Taskform from "../components/Taskform";

class TasklistPage extends Component {
  componentWillMount() {
    this.props.loadTasks();
  }

  renderItem = (task) => {
    console.log(task)
    return (
      <List.Item key={task.id}>
        <List.Icon name="browser" size="large" verticalAlign="middle" />
        <List.Content>
          <Link to={`/tasklist/${task.processDefinitionId}/${task.id}`}>
            <List.Header>{task.name}</List.Header>
            <List.Description>{task.created}</List.Description>
          </Link>
        </List.Content>
      </List.Item>
    );
  }

  render() {
    let { task, ...rest } = this.props;
    console.log(rest);
    let taskForm = ""
    if (this.props.processDefinitionId) {
      taskForm = <Taskform />
    } else {
      taskForm = <div>Please choose task.</div>
    }

    if (!task) {
      return (<div>Loading tasks</div>)
    } else {
      // task = sortBy(task, "created").reverse()
      return (
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <List relaxed>
                {Object.values(task).map(this.renderItem)}
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              {taskForm}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const params = ownProps.match.params
  return {
    ...params,
    ...state.entities
  }
}

export default withRouter(connect(mapStateToProps, {
  loadTasks
})(TasklistPage))