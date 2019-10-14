import React, { Component } from "react"
import * as FormTypes from "./forms"
import { completeTask, startProcessInstance, loadTaskVariables } from "./../store/actionTypes";
import { connect } from "react-redux"

class GenericForm extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (!this.state || !this.state.loading) {
      this.loadExistingVariables()
    }
  }

  render() {
    const { formKey, processDefinitionKey, taskId } = this.props
    const Form = FormTypes[processDefinitionKey][formKey]
    if (taskId == null) {
      return (
        <div className="generic-form">
          <Form onSubmit={this.handleStartInstance} />
        </div>
      )
    } else {
      return (
        <div className="generic-form">
          <Form onSubmit={this.handleComplete} />
        </div>
      )
    }
  }

  loadExistingVariables() {
    let { form, dispatch, taskId } = this.props
    if (form) {
      this.setState({ loading: true });
      dispatch(loadTaskVariables(taskId, form.registeredFields))
    }

  }

  handleComplete(values, dispatch) {
    values = this.getBody(values)
    return dispatch(completeTask(this.props.taskId, values))
  }

  handleStartInstance(values, dispatch) {
    values = this.getBody(values)
    return dispatch(startProcessInstance(this.props.processDefinitionKey, values))
  }

  getBody(values) {
    let variables = {}
    Object.keys(values).forEach((item) => {
      variables[item] = { "value": values[item] }
    });
    return {
      "variables": variables
    }
  }
}

export default connect(
  state => ({})
)(GenericForm)