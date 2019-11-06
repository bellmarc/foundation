import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Checkbox,
    Button
  } from 'antd';
import "../style/SignUp.css";


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false

    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
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
            <Form {...formItemLayout} className="signup-form" onSubmit={this.handleSubmit}>
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
                    {getFieldDecorator('nickname', {
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
                  <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        }
                      ],
                    })(<Input.Password />)}
                  </Form.Item>
                  <Form.Item label="Work Residence">
                    {getFieldDecorator('residence', {

                      rules: [
                        { required: true, message: 'Please select your work location' },
                      ],
                    }(<Input />))
                    }
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>
                        I agree to the <a href="">Terms Of Condition</a>
                      </Checkbox>,
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
        </div>
        );
    }
}

const SignUp = Form.create({ name: 'register' })(RegistrationForm);


export default SignUp