import clsx from "clsx";
import { FC, useState } from "react";

const variants = {
  info : '',
  alert: 'slds-alert_warning',
  error: 'slds-alert_error',
  offline: 'slds-alert_offline'
} 

export type AlertProps = {
  text: string,
  variant: keyof typeof variants,
};

const Alert: FC<AlertProps> = ({ text, variant }: AlertProps) => {
  const [open, setOpen] = useState(true);

  if (!open) {
    return null;
  }

  return (
    <div>
      <div
        className={clsx(
          'slds-notify',
          'slds-notify_alert',
          variants[variant],
        )}
        role="alert"
      >
        <span className="slds-assistive-text">warning</span>
        <span
          className="slds-icon_container slds-icon-utility-user slds-m-right_x-small"
          title="Description of icon when needed"
        >
          <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
          </svg>
        </span>
        <h2>{text}</h2>
        <div className="slds-notify__close">
          <button
            className="slds-button slds-button_icon slds-button_icon-small slds-button_icon-inverse"
            title="Close"
            onClick={() => setOpen(false)}
          >
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
            </svg>
            <span className="slds-assistive-text">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
