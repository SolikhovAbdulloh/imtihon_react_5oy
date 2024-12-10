import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
const NotificationApp = () => {
  const notify = ({ type }, pauseOnHover) => {
    switch (type) {
      case "add":
        return notification.open({
          type: "success",
          message: "Savatga qo'shildi",
        });
      case "like":
        return notification.open({
          message: "Tanlangan maxsulot",
          icon: <SmileOutlined />,
        });

      default:
        break;
    }
  };
  return notify;
};

export default NotificationApp;
