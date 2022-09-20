import { CompassIcon } from "assets/icons";
import BusinessContextContent from "components/BusinessContextContent";
import BusinessContextList from "components/BusinessContextList";
import "./style.css";

const BusinessContext = () => (
  <div className="business-context">
    <div className="business-context__header">
      <h2 className="business-context__heading">
        <CompassIcon />
        Business context
      </h2>
    </div>
    <div className="business-context__container">
      <BusinessContextList />
      <BusinessContextContent />
    </div>
  </div>
);

export default BusinessContext;
