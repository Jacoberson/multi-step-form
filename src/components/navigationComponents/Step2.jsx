import Radio from "../htmlComponents/Radio";
import Label from "../htmlComponents/Label";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

export default function Step2() {
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        <li className="plan current-selected">
          <img src={ArcadeIcon} alt="" />
          <div className="plan-text">
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>
        </li>
        <li className="plan">
          <img src={AdvancedIcon} alt="" />
          <div className="plan-text">
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </div>
        </li>
        <li className="plan">
          <img src={ProIcon} alt="" />
          <div className="plan-text">
            <h3>Pro</h3>
            <p>$15/mo</p>
          </div>
        </li>
      </ul>
      <div className="billing-type">
        <Label name="monthly" text="Monthly" />
        <Radio
          id="monthly"
          name="billing"
          value="monthly"
          isDefaultChecked={true}
        />
        <Radio
          id="yearly"
          name="billing"
          value="yearly"
          isDefaultChecked={false}
        />
        <Label name="yearly" text="Yearly" />
      </div>
    </div>
  );
}
