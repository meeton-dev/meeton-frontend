import React, { useState } from 'react';
import LangSettings from '../../Components/Settings/LangSettings';
import { Btn } from "../../Components/Forms/Buttons/index";
import tabValues from './helper';

const BoxWrapper = (props) => {
    const {label, children} = props;
    const [visible,  setVisible] = useState(true);
    return (
        <div className='custombox'>
            <div className='custombox-top'>
                <div className='custombox-top-label'>{label}</div>
                <div onClick={() => setVisible(!visible)} className='custombox-top-icon'>
                    <span className={visible ? "icon-minus" : "icon-plus"} />
                </div>
            </div>
            <div className={`custombox-content ${visible ? "visible" : ''}`}>{children}</div>
        </div>
    );
}

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