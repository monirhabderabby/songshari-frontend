import { Modal } from "antd";
import React from "react";
import MatchPreferenceForm from "./MatchPreferenceForm";

const MatchersModalForm = ({
  fromDevice,
  mathchesModalOpen,
  setMatchesModalOpen,
}) => {
  let width = "60%";
  if (fromDevice === "mobile") {
    width = "85%";
  }
  return (
    <div>
      <div>
        <Modal
          title={
            <div className="flex justify-center mb-4">
              <h1>Matches Preference Modal form</h1>
            </div>
          }
          centered
          open={mathchesModalOpen}
          onCancel={() => setMatchesModalOpen(false)}
          footer={null}
          width={width}
        >
          <MatchPreferenceForm {...{ setMatchesModalOpen }} />
        </Modal>
      </div>
    </div>
  );
};

export default MatchersModalForm;
