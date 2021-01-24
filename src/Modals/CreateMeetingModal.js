import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ModalWrapper from './ModalWrapper';
import { Form, Input, Radio, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const validations = [
    { 
        title: "Add a title",
        name: 'Title',
        validated: false 
    },
    { 
        title: "Add a short description.",
        label: 'Description',
        validated: false 
    },
    { 
        title: "Choose a meeting type.", 
        name: 'Title', 
        validated: false 
    },
    { 
        title: "If you want, you can add a some goal or topic you have to discuss!", 
        name: 'Title', 
        validated: false 
    },
    { 
        title: "Set a date and time when this meeting will start", 
        name: 'Title', 
        validated: false 
    },
    { 
        title: "Invite people - at least one", 
        name: 'Title', 
        validated: false 
    },
];

const CreateMeetingModal = () => {

    const history = useHistory();
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();
    // const meetingCode = useSelector((state) => state.meeting?.code);
  
    // useEffect(() => {
    //     forceUpdate({});

    //     if (meetingCode) {
    //         // Check its not null
    //         history.push(`/room/${meetingCode}`);
    //     }
    // }, [history, meetingCode]);
  
    return (

        <ModalWrapper
            visible={false}
            mask={false}
            onOk={() => {}}
            clss={'create-meeting'}
            right
        >
            <div className="create-infos">
            <div className="close-button">
                <span >Close</span>
            </div>
            <div className="head">
                <h2>It's time to create a new meeting!</h2>
                <p>
                Before you start don't forget some important thing, what could
                help to specify each meetings you creating!
                </p>
            </div>
            <div className="validations">
                <h2>Please check if you have the followings:</h2>
                <ul>
                {validations.map(({validated, title}, _index) => {
                    return(
                    <li key={_index}>
                        <span className={`icon ${validated ? 'ico-tick-mark true' : 'ico-exclamation-tringle false'}`}></span>
                        <span className="title">{title}</span>
                    </li>
                    )
                })}
                </ul>
            </div>
            <div className="tips">
                *Tip for you: Did you know that, Cian is a fucker? You can call him a fucker all the time!
            </div>
            </div>
            <div className="create-content">
                <Form 
                    form={form} 
                    name="create_meeting" 
                    hideRequiredMark={true}
                    onFinish={() => {}}>
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: ' '  }]}
                    >
                        <div className="label">Title</div>
                        <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <div className="label">Description</div>
                        <Input.TextArea
                            placeholder="Description"
                        />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <div className="label">Meeting type</div>
                        <Radio.Group>
                            <Radio.Button value="scheduled">Scheduled</Radio.Button>
                            <Radio.Button value="scheduled-timed">Scheduled timed</Radio.Button>
                            <Radio.Button value="ad-hoc">Ad-hoc</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.List name="names">
                        {(fields, { add, remove }) => {
                        return (
                            <div>
                                <div className="label">Topics / Goals</div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        required={false}
                                        key={field.key}
                                    >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "You have to add a title or delete this field.",
                                        },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="Topic name" style={{ width: '60%' }} />
                                    </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            style={{ margin: '0 8px' }}
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                            />
                                        ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                    >
                                    <PlusOutlined /> Add new topic
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                        }}
                    </Form.List>

                    <Form.Item shouldUpdate={true}>
                        {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Create meeting
                        </Button>
                        )}
                    </Form.Item>
                </Form>
                
                    {/* <Button
                        type="primary"
                        size="small"
                        onClick={() => dispatch(meetingActions.createMeeting())}
                    >
                        Create meeting
                    </Button> */}
            </div>
        </ModalWrapper>
    );
  };
  
export default CreateMeetingModal;
  