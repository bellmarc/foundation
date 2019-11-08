import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Checkbox,
    Select,
    Button
  } from 'antd';
import 'antd/dist/antd.css';
import "../style/SignUpForm.css";
import { withUsers } from '../context/UserProvider.js';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class SignUpForm extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSignUpSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (values.agreement) {
           values = {...values, userType: "professional"}
        } else {
          values = {...values, userType: "customer"}
        }
        delete values.agreement
          console.log('Received values of form: ', values);
          this.props.userSignUp(values)
          this.props.form.resetFields()
      }
      });
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        };
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 2,
            },
        },
        };

    return (
        <div className="signup-form-container">
          <h2 className="signup-header">Sign Up</h2>
            <Form {...formItemLayout} className="signup-form" onSubmit={this.handleSignUpSubmit}>
                  <Form.Item
                    label={
                      <span>
                        Name&nbsp;
                        <Tooltip title="Please type your first name. ">
                          <Icon type="question-circle-o" />
                        </Tooltip>
                      </span>
                    }
                  >
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: 'Please enter your name', whitespace: true }],
                    })(<Input />)}
                  </Form.Item>
                <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The e-mail address entered was not valid',
                        },
                        {
                          required: true,
                          message: 'Please enter your e-mail address',
                        },
                      ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ],
                    })(<Input.Password />)}
                  </Form.Item>

                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a location"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                      <Option value="Barcelona, Spain">Barcelona, Spain</Option>
                      <Option value="New York City, New York">New York City, New York</Option>
                      <Option value="Tokyo, Japan">Tokyo, Japan</Option>
                      <Option value="London, England">London, England</Option>
                    </Select>,
                  <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>
                        I am a Professional Videographer
                      </Checkbox>,
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Sign Up
                    </Button>
                  </Form.Item>
                </Form>
        </div>
        );
    }
}

const SignUp = Form.create({ name: 'register' })(SignUpForm);


export default withUsers(SignUp)