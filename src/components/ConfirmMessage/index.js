import { Table, Button, Input, Modal } from 'antd';

const ConfirmMessage = (id, name, title, action) => {
  Modal.confirm({
    title: title,
    content: name,
    okText: 'Có',
    okType: 'danger',
    centered: true,
    keyboard: true,
    width: 540,
    icon: '',
    cancelText: 'Không',
    className: 'confirm-delete',
    onOk() {
      action(id);
    },
    onCancel() {
      console.log('Cancel');
    }
  });
};

export default ConfirmMessage;
