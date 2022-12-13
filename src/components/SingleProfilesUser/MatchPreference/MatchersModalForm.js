import React from 'react';
import { Modal } from 'antd';
import MatchPreferenceForm from './MatchPreferenceForm';

const MatchersModalForm = ({ mathchesModalOpen, setMatchesModalOpen }) => {
    return (
        <div>
            <Modal
                title={<div className='flex justify-center mb-4'><h1>Matches Preference Modal form</h1></div>}
                centered
                open={mathchesModalOpen}
                onCancel={() => setMatchesModalOpen(false)}
                footer={null}
                width="55%"
            >
                <MatchPreferenceForm />
            </Modal>
        </div>
    );
}

export default MatchersModalForm;
