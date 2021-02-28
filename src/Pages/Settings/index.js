import React, { useState } from 'react';
import LangSettings from '../../Components/Settings/LangSettings';
import { Btn } from "../../Components/Forms/Buttons/index";

const BoxWrapper = (props) => {
    const {label, children} = props;
    return (
        <div className='custombox'>
            <div>{label}</div>
            {children}
        </div>
    );
}

const tabValues = [
    {
        key: 1,
        value: 1,
        label: "Tab 1"
    },

    {
        key: 2,
        value: 2,
        label: "Tab 2"
    },
    {
        key: 3,
        value: 3,
        label: "Tab 3"
    },
    {
        key: 4,
        value: 4,
        label: "Tab 4"
    },
    {
        key: 5,
        value: 5,
        label: "Tab 5"
    }
]


const Settings = () => {
    const [activeTab,  setActiveTab] = useState(1); 
   
// modalVisible
    return (
        <section className='settings'>
            <div className='settings-tabs'>
            {tabValues.map((tab) => <div className={activeTab === tab.value ? 'active' : '' } key={tab.key} onClick={() => setActiveTab(tab.value) }>{tab.label}</div> )}
            </div>
            {activeTab === 1 && (
                <BoxWrapper label={'Language page 1'}>
                    <LangSettings/>
                </BoxWrapper>
            )}
            {activeTab === 2 && (
                <BoxWrapper label={'Language page 2'}>
                    <LangSettings/>
                </BoxWrapper>
            )}
            {activeTab === 3 && (
                <BoxWrapper label={'Language page 3'}>
                    <LangSettings/>
                </BoxWrapper>
            )}
            {activeTab === 4 && (
                <BoxWrapper label={'Language page 4'}>
                    <LangSettings/>
                </BoxWrapper>
            )}
            {activeTab === 5 && (
                <>
                    <BoxWrapper label={'Language page 5'}>
                        <LangSettings/>
                    </BoxWrapper>
                    <BoxWrapper label={'Language page 5'}>
                        <LangSettings/>
                    </BoxWrapper>
                    <BoxWrapper label={'Language page 5'}>
                        <LangSettings/>
                    </BoxWrapper>
                </>

            )}

        </section>
    );
};


export default Settings