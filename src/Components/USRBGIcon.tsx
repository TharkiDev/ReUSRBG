import { components } from "replugged";
import { IconClasses, InviteActions } from "../lib/requiredModules";
import { USBBG_SERVER_INVITE_CODE } from "../lib/consts";
const { Tooltip } = components;
export default (
  <Tooltip
    {...{
      text: "USRBG Banner",
      className: `${IconClasses.iconItem} usr-bg-icon-clickable`,
      style: {
        display: "block",
        position: "absolute",
        right: "10px",
        top: "1px",
      },
    }}>
    <div
      {...{
        onClick: () =>
          InviteActions.acceptInviteAndTransitionToInviteChannel({
            inviteKey: USBBG_SERVER_INVITE_CODE,
          }),
      }}>
      <svg {...{ class: IconClasses.actionIcon, viewBox: "0 0 24 24" }}>
        <path
          {...{
            fill: "currentColor",
            d: "M6 16.938v2.121L5.059 20h-2.12L6 16.938Zm16.002-2.503v2.122L18.56 20h-.566v-1.557l4.008-4.008ZM8.75 14h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143V20H7v-4.25a1.75 1.75 0 0 1 1.606-1.744L8.75 14Zm-.729-3.584c.06.579.243 1.12.523 1.6L2 18.56v-2.122l6.021-6.022Zm13.98-.484v2.123l-4.007 4.01v-.315l-.004-.168a2.734 2.734 0 0 0-.387-1.247l4.399-4.403ZM12.058 4 2 14.06v-2.121L9.936 4h2.12Zm9.945 1.432v2.123l-5.667 5.67a2.731 2.731 0 0 0-.86-.216l-.23-.009h-.6a4.02 4.02 0 0 0 .855-1.062l6.502-6.506ZM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM7.559 4l-5.56 5.56V7.438L5.439 4h2.12Zm13.498 0-5.148 5.149a3.98 3.98 0 0 0-.652-1.47L18.935 4h2.122Zm-4.498 0-2.544 2.544a3.974 3.974 0 0 0-1.6-.522L14.438 4h2.122Z",
          }}
        />
      </svg>
    </div>
  </Tooltip>
);
