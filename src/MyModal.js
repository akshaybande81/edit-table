
import React, {Component} from "react";
import "antd/dist/antd.css";
import "./index.css";
import {Modal, Button} from "antd";
import MyForm from './MyForm';

class MyModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    title={this.props.title}
                    visible={this.props.visibleModal}
                    onOk={this.props.handleOk}
                    onCancel={this.props.handleCancel}
                    okText="Edit"
                    footer={
                        <div>
                            <Button type="primary" onClick={this.props.handleOk}>
                                Done
                            </Button>
                        </div>
                    }
                >
                    <MyForm
                        handleSubmit={this.props.handleOk}
                        ref={this.props.formRef}
                        selectedRecord={this.props.selectedRecord}
                        handleObjectChange={this.props.handleObjectChange}
                        onChange={this.props.handleFormChange}
                        errors={this.props.errors}
                    />
                </Modal>
            </div>
        );
    }
}

export default MyModal;


