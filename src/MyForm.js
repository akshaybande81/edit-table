import {Form, Input} from 'antd';
import React, {Component} from 'react';
import MYJson from './MyJson';




class MyForm extends Component {

    render() {
        const {form: {getFieldDecorator}, handleSubmit, selectedRecord, handleObjectChange} = this.props;
        // console.log(selectedRecord);

        const generateForm = (record) => {
            let keys = Object.keys(record);
            let form = keys.filter((val) => val !== "key")
                .map((val, i) => {
                    if (val === "object") {
                        /**render json view */
                        return (
                            <MYJson
                                json={record[val]}
                                key={i}
                                name={val}
                                selectedRecord={selectedRecord}
                                handleObjectChange={handleObjectChange}
                            />
                        )
                    }
                    return (
                        <Form.Item key={i} label={val}>
                            {getFieldDecorator(val, {
                                rules: [{required: true, message: `Please input correct value`}]
                            })(
                                <Input placeholder={val} name={val} />
                            )}
                        </Form.Item>
                    )
                })
            return form;
        }

        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    {selectedRecord && generateForm(this.props.selectedRecord)}
                </Form>
            </div>
        )
    }
}

const mapPropsToFields = ({selectedRecord, errors}) => {
    if (selectedRecord) {
        let keys = Object.keys(selectedRecord);
        let res = {};
        keys.filter(val => val !== "key")
            .forEach((val) => {
                res[val] = Form.createFormField({errors: errors[selectedRecord[val]], value: selectedRecord[val]})
            })
        return res;
    } else {
        return {};
    }
}
const WrappedForm = Form.create({
    name: 'simple_form',
    mapPropsToFields,
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
})(MyForm);


export default WrappedForm;
