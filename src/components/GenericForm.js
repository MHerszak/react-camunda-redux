import React, { Component } from "react";
import * as FormTypes from "./forms";
import { completeTask, startProcessInstance, loadTaskVariables } from "./../store/actionTypes";
import { connect } from "react-redux";

const firtLetteUpperCase = str => {
  const [first, ...rest] = str.split("");
  return [first.toUpperCase(), ...rest].join("");
};

class GenericForm extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (!this.state || !this.state.loading) {
      this.loadExistingVariables()
    }
  }

  render() {
    const { formKey, processDefinitionKey, taskId } = this.props;

    const Form = FormTypes[firtLetteUpperCase(formKey)];
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

  loadExistingVariables = () => {
    let { form, dispatch, taskId } = this.props
    if (form) {
      this.setState({ loading: true });
      this.props.loadTaskVariables(taskId, form.registeredFields);
    }

  }

  handleComplete = (values, dispatch) => {
    values = this.getBody(values)
    return this.props.completeTask(this.props.taskId, values);
  }

  handleStartInstance = (values, dispatch) =>  {
    values = this.getBody(values)
    return this.props.startProcessInstance(this.props.processDefinitionKey, values);
  }

  getBody = (values) => {
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
  null,
  { completeTask, startProcessInstance, loadTaskVariables }
)(GenericForm)