import React, {Component} from 'react';
import ReactJson from 'react-json-view';

class MyJson extends Component {

    handleEdit = (obj) => {        
        const {selectedRecord, name, handleObjectChange} = this.props;
        const updatedValue = obj.updated_src;
        selectedRecord[name] = updatedValue;
        console.log("calling objchange", selectedRecord);
        handleObjectChange(selectedRecord);
    }

    handleAdd = (obj) => {
        const {selectedRecord, name, handleObjectChange} = this.props;
        const updatedValue = obj.updated_src;
        selectedRecord[name] = updatedValue;
        handleObjectChange(selectedRecord);
    }

    handleDelete = (obj) => {
        const {selectedRecord, name, handleObjectChange} = this.props;
        const updatedValue = obj.updated_src;
        selectedRecord[name] = updatedValue;
        handleObjectChange(selectedRecord);
    }

    render() {
        /** props as json */
        let {json, name} = this.props;
        try {
            json = (typeof (json) === "string") ? JSON.parse(json) : json;
        } catch (e) {
            // do nothing
            console.log(e.message, "error");
            json = {};
        }
        return (
            <div>
                <ReactJson
                    src={json}
                    name={name}
                    iconStyle="square"
                    indentWidth="2"
                    collapsed={true}
                    enableClipboard={true}
                    displayObjectSize={true}
                    onEdit={this.handleEdit}
                    onAdd={this.handleAdd}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default MyJson;

/**
 *
 * {
    updated_src: src, //new src value
    name: name, //new var name
    namespace: namespace, //list, namespace indicating var location
    new_value: new_value, //new variable value
    existing_value: existing_value, //existing variable value
}
 */